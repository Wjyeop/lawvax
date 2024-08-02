import React from "react";
import "./App.css";
import "./style.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MembersPage from "./pages/MembersPage/MembersPage";
import MemberSearchPage from "./pages/MemberSearchPage/MemberSearchPage";
import MemberProfilePage from "./pages/MemberProfilePage/MemberProfilePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/members" element={<MembersPage />} />
          <Route path="/memberSearch" element={<MemberSearchPage />} />
          <Route path="/profile" element={<MemberProfilePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
