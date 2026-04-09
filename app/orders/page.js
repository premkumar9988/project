"use client";

import { useState } from "react";

export default function OrderPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    payment: "cod",
  });

  const books = [
    { id: 1, title: "Atomic Habits", price: 499 },
    { id: 2, title: "Deep Work", price: 399 },
  ];

  const total = books.reduce((acc, item) => acc + item.price, 0);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleOrder = () => {
    alert("Order Placed Successfully!");
    console.log({ form, books, total });
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>📚 Checkout</h1>

      <div style={styles.grid}>
        {/* LEFT: FORM */}
        <div style={styles.card}>
          <h2>Shipping Details</h2>

          <input
            style={styles.input}
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
          />

          <input
            style={styles.input}
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />

          <textarea
            style={styles.input}
            name="address"
            placeholder="Address"
            onChange={handleChange}
          />

          <input
            style={styles.input}
            name="city"
            placeholder="City"
            onChange={handleChange}
          />

          <h3>Payment Method</h3>

          <select
            name="payment"
            style={styles.input}
            onChange={handleChange}
          >
            <option value="cod">Cash on Delivery</option>
            <option value="card">Credit/Debit Card</option>
          </select>
        </div>

        {/* RIGHT: ORDER SUMMARY */}
        <div style={styles.card}>
          <h2>Order Summary</h2>

          {books.map((book) => (
            <div key={book.id} style={styles.item}>
              <span>{book.title}</span>
              <span>₹{book.price}</span>
            </div>
          ))}

          <hr />

          <div style={styles.total}>
            <strong>Total</strong>
            <strong>₹{total}</strong>
          </div>

          <button style={styles.button} onClick={handleOrder}>
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    fontFamily: "Arial",
    background: "#f5f5f5",
    minHeight: "100vh",
  },

  heading: {
    textAlign: "center",
    marginBottom: "30px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
    maxWidth: "900px",
    margin: "auto",
  },

  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },

  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },

  item: {
    display: "flex",
    justifyContent: "space-between",
    margin: "10px 0",
  },

  total: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "15px",
    fontSize: "18px",
  },

  button: {
    width: "100%",
    marginTop: "20px",
    padding: "12px",
    background: "#0070f3",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
  },
};