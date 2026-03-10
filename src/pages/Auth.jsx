import React, { useState } from "react";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    const res = await fetch("http://localhost:5000/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    alert(data.message || data.error);
  };

  const handleLogin = async () => {
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    alert(data.token ? "Login successful!" : data.error);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-50 p-6">
      <div className="bg-white shadow-lg p-8 rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-purple-800 mb-6 text-center">Sign Up / Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full mb-3 p-3 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full mb-4 p-3 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
        />

        <div className="flex gap-4">
          <button onClick={handleSignup} className="w-full py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
            Signup
          </button>
          <button onClick={handleLogin} className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
