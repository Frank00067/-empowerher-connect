import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import Auth from "./pages/Auth";

function App() {
  const [showAuth, setShowAuth] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Header onToggleAuth={() => setShowAuth(true)} />
      <main className="flex-1">
        {showAuth ? <Auth /> : <Landing />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
