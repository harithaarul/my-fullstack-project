



import React, { useEffect, useState } from "react";
import "./PaymentHistory.css";

const PaymentHistory = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    setPayments([
      {
        id: 1,
        name: "Haritha",
        phone: "9876543210",
        amount: "₹1500",
        date: "05-01-2026",
        mode: "Cash",
      },
      {
        id: 2,
        name: "Gayathri",
        phone: "9123456789",
        amount: "₹1200",
        date: "02-01-2026",
        mode: "UPI",
      },
    ]);
  }, []);

  return (
    <div className="dashboard-wrapper">
 
      <div className="expired-table-section">
        <h4>Payment History</h4>

        <div className="table-container">
          <table className="expired-table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Payment Mode</th>
              </tr>
            </thead>

            <tbody>
              {payments.length === 0 ? (
                <tr>
                  <td colSpan="6" style={{ textAlign: "center" }}>
                    No records found
                  </td>
                </tr>
              ) : (
                payments.map((p, index) => (
                  <tr key={p.id}>
                    <td>{index + 1}</td>
                    <td>{p.name}</td>
                    <td>{p.phone}</td>
                    <td>{p.amount}</td>
                    <td>{p.date}</td>
                    <td>{p.mode}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
