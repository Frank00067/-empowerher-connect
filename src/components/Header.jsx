import React from "react";

export default function Header({ onToggleAuth }) {
  return (
    <header className="w-full bg-purple-700 text-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">EmpowerHer</h1>
      <button
        onClick={onToggleAuth}
        className="bg-white text-purple-700 px-4 py-2 rounded-lg hover:bg-purple-100 transition"
      >
        Login / Signup
      </button>
    </header>
  );
}
