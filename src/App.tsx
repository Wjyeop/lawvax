import React from "react";
import "./App.css";
import "./style.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage/LandingPage";

function App() {
  return (
    <div className="App">
      <Header />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;
