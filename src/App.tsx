import React from "react";
import "./App.css";
import "./style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage/LandingPage";
import LandingSearchPage from "./pages/LandingSearchPage/LandingSearchPage";
import MembersPage from "./pages/MembersPage/MembersPage";
import MemberSearchPage from "./pages/MemberSearchPage/MemberSearchPage";
import MemberProfilePage from "./pages/MemberProfilePage/MemberProfilePage";
import NewsPage from "./pages/NewsPage/NewsPage";
import PostPage from "./pages/PostPage/PostPage";
import NewsLetterPage from "./pages/NewsLetterPage/NewsLetterPage";
import IntroPage from "./pages/IntroPage/IntroPage";
import ServicesPage from "./pages/ServicesPage/Services";
import CenterSide from "./components/CenterSide";
import TechCenterPage from "./pages/TechCenterPage/TechCenterPage";
import SupportCenterPage from "./pages/SupportCenterPage/SupportCenterPage";
import ServicesDetail from "./pages/ServicesDetailPage/ServicesDetail";
import Topbutton from "./components/TopButton";

function App() {
  //버셀배포테스트
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <CenterSide />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/landing-search" element={<LandingSearchPage />} />

          <Route path="/intro" element={<IntroPage />} />

          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/detail" element={<ServicesDetail />} />

          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/post" element={<PostPage />} />

          <Route path="/newsletter" element={<NewsLetterPage />} />

          <Route path="/members" element={<MembersPage />} />
          <Route path="/memberSearch" element={<MemberSearchPage />} />
          <Route path="/profile" element={<MemberProfilePage />} />

          <Route path="/support-center" element={<SupportCenterPage />} />
          <Route path="/tech-center" element={<TechCenterPage />} />
        </Routes>
        <Topbutton />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
