import React, { useState } from "react";

export default function Landing() {
  const features = [
    { emoji: "🎓", text: "Join workshops" },
    { emoji: "🤝", text: "Connect with mentors" },
    { emoji: "⚡", text: "Learn new skills" },
    { emoji: "💬", text: "Collaborate with peers" },
  ];

  const skills = ["React", "Node.js", "Tailwind", "MongoDB", "Python", "CSS", "JavaScript", "Figma", "Git", "TypeScript"];
  const [query, setQuery] = useState("");
  const filteredSkills = skills.filter(skill => skill.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-purple-200 flex flex-col items-center p-6">
      <main className="flex-1 flex flex-col items-center justify-center text-center">
        <h1 className="text-6xl font-extrabold text-purple-800 mb-6">EmpowerHer</h1>
        <p className="text-xl text-purple-700 mb-8 max-w-xl">
          Discover, learn, and grow — connect with mentors, join workshops, and develop your skills for a brighter future.
        </p>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition">
              <span className="text-4xl mb-2">{f.emoji}</span>
              <p className="text-purple-700 font-semibold">{f.text}</p>
            </div>
          ))}
        </div>

        {/* Skill Search */}
        <div className="mb-8 w-full max-w-md">
          <input
            type="text"
            placeholder="Search for skills..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="w-full p-3 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 mb-3"
          />
          <ul className="space-y-1">
            {filteredSkills.map((skill, i) => (
              <li key={i} className="px-3 py-2 bg-secondary rounded-lg hover:bg-purple-600 text-purple-800 hover:text-white transition">
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 flex-wrap justify-center">
          <button className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition">
            Get Started
          </button>
          <button className="px-6 py-3 bg-white border border-purple-600 text-purple-700 rounded-lg shadow hover:bg-purple-50 transition">
            Sign In
          </button>
        </div>
      </main>
    </div>
  );
}
