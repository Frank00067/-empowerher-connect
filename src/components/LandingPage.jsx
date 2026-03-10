import React from "react";

export default function LandingPage() {
  return (
    <div className="landing-container" style={{ textAlign: "center", padding: "2rem" }}>
      <h1>EmpowerHer</h1>
      <p>Discover, learn, and grow — connect with mentors, join workshops, and develop your skills for a brighter future.</p>

      <div style={{ margin: "2rem 0" }}>
        <div>🎓 Join workshops</div>
        <div>🤝 Connect with mentors</div>
        <div>⚡ Learn new skills</div>
        <div>💬 Collaborate with peers</div>
      </div>

      <div style={{ margin: "2rem 0" }}>
        <input type="text" placeholder="Search for skills..." />
        <div>
          React, Node.js, Tailwind, MongoDB, Python, CSS, JavaScript, Figma, Git, TypeScript
        </div>
      </div>

      <div style={{ margin: "2rem 0" }}>
        <button onClick={() => window.location.href="/login"}>Get Started</button>
        <button onClick={() => window.location.href="/login"}>Sign In</button>
      </div>

      <footer style={{ marginTop: "3rem" }}>© 2026 EmpowerHer. All rights reserved.</footer>
    </div>
  );
}
