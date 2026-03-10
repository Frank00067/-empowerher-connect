import React, { useState } from "react";

export default function Login() {
  const API_URL = "http://localhost:3000";
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const res = await fetch(`${API_URL}/register`, {
      method: "POST",
      body: new URLSearchParams(formData)
    });
    const text = await res.text();
    setMessage(text);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const res = await fetch(`${API_URL}/login`, {
      method: "POST",
      body: new URLSearchParams(formData)
    });
    const text = await res.text();
    setMessage(text);
    if (text.includes("Welcome")) {
      localStorage.setItem("userEmail", formData.get("email"));
      window.location.href = "/mentorship.html"; // You can later make this a React page
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Password" required />
        <button type="submit">Register</button>
      </form>

      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>

      <p style={{ color: message.includes("Welcome") ? "green" : "red" }}>{message}</p>
    </div>
  );
}
