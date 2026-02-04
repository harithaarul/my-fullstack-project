
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import mysql.connector

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


def get_db():
    return mysql.connector.connect(
        host="localhost",
        user="root",
        password="",
        database="gymtable"
    )

class User(BaseModel):
    id: str
    name: str
    age: int
    gender: str
    phone: str
    email: str
    city: str
    joiningDate: str
    duration: int


class UserUpdate(BaseModel):
    name: str
    age: int
    gender: str
    phone: str
    email: str
    city: str
    joiningDate: str
    duration: int

@app.post("/register")
def register(user: User):
    try:
        conn = get_db()
        cursor = conn.cursor()

        sql = """
        INSERT INTO users
        (id, name, age, gender, phone, email, city, joiningDate, duration)
        VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)
        """

        values = (
            user.id,
            user.name,
            user.age,
            user.gender,
            user.phone,
            user.email,
            user.city,
            user.joiningDate,
            user.duration
        )

        cursor.execute(sql, values)
        conn.commit()

        cursor.close()
        conn.close()

        return {"message": "User added successfully"}

    except Exception as e:
        return {"error": str(e)}



@app.get("/users")
def get_users():
    conn = get_db()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM users")
    data = cursor.fetchall()
    cursor.close()
    conn.close()
    return data



@app.get("/users/{user_id}")
def get_user(user_id: str):
    conn = get_db()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM users WHERE id = %s", (user_id,))
    user = cursor.fetchone()
    cursor.close()
    conn.close()

    if user:
        return user
    return {"error": "User not found"}


@app.put("/users/{user_id}")
def update_user(user_id: str, user: UserUpdate):
    try:
        conn = get_db()
        cursor = conn.cursor()

        sql = """
        UPDATE users SET
            name = %s,
            age = %s,
            gender = %s,
            phone = %s,
            email = %s,
            city = %s,
            joiningDate = %s,
            duration = %s
        WHERE id = %s
        """

        values = (
            user.name,
            user.age,
            user.gender,
            user.phone,
            user.email,
            user.city,
            user.joiningDate,
            user.duration,
            user_id
        )

        cursor.execute(sql, values)
        conn.commit()

        if cursor.rowcount == 0:
            return {"error": "User not found"}

        cursor.close()
        conn.close()

        return {"message": "User updated successfully"}

    except Exception as e:
        return {"error": str(e)}

@app.delete("/users/{user_id}")
def delete_user(user_id: str):
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute("DELETE FROM users WHERE id = %s", (user_id,))
    conn.commit()
    cursor.close()
    conn.close()
    return {"message": "User deleted successfully"}
