import React from "react";
import "./App.css";
import "./style.css";
import "./style-mob.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage/LandingPage";
import LandingSearchPage from "./pages/LandingSearchPage/LandingSearchPage";
import LandingSearchDetailPage from "./pages/LandingSearchDetailPage/LandingSearchDetail";
import MembersPage from "./pages/MembersPage/MembersPage";
import MemberSearchPage from "./pages/MemberSearchPage/MemberSearchPage";
import MemberProfilePage from "./pages/MemberProfilePage/MemberProfilePage";
import NewsPage from "./pages/NewsPage/NewsPage";
import NewsPostPage from "./pages/NewsPostPage/NewsPostPage";
import NewsLetterPage from "./pages/NewsLetterPage/NewsLetterPage";
import NewsLetterPostPage from "./pages/NewsLetterPostPage/NewsLetterPostPage";
import IntroPage from "./pages/IntroPage/IntroPage";
import ServicesPage from "./pages/ServicesPage/Services";
import CenterSide from "./components/CenterSide";
import TechCenterPage from "./pages/TechCenterPage/TechCenterPage";
import SupportCenterPage from "./pages/SupportCenterPage/SupportCenterPage";
import ServicesDetail from "./pages/ServicesDetailPage/ServicesDetail";
import Topbutton from "./components/TopButton";
import HeaderMob from "./components/HeaderMob";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <HeaderMob />
        <CenterSide />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/landing-search" element={<LandingSearchPage />} />
          <Route
            path="/landing-search-detail"
            element={<LandingSearchDetailPage />}
          />

          <Route path="/intro" element={<IntroPage />} />

          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/detail" element={<ServicesDetail />} />

          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/post" element={<NewsPostPage />} />

          <Route path="/newsletter" element={<NewsLetterPage />} />
          <Route path="/newsletter/post" element={<NewsLetterPostPage />} />

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
