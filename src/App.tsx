import "./App.css";
import "./style.css";
import "./style-mob.css";
import "./Admin.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

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
import TechCenterPage from "./pages/TechCenterPage/TechCenterPage";
import SupportCenterPage from "./pages/SupportCenterPage/SupportCenterPage";
import ServicesDetail from "./pages/ServicesDetailPage/ServicesDetail";
import Layout from "./components/Layout/Layout";

// admin
import AdminLayout from "./components/Layout/AdminLayout";
import PeopleManagement from "./pages/Admin/People/PeopleManagement";
import PeopleRegister from "./pages/Admin/People/PeopleRegister";
import WorkCategoryManagement from "./pages/Admin/WorkCategory/WorkCategoryManagement";
import NewsLetterManagement from "./pages/Admin/NewsLetter/NewsLetterManagement";
import NewsLetterRegister from "./pages/Admin/NewsLetter/NewsLetterRegister";
import PostManagement from "./pages/Admin/Post/PostManagement";
import PostRegister from "./pages/Admin/Post/PostRegister";
import Login from "./pages/Admin/Login/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
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
          </Route>
          <Route path="/admin/login" element={<Login />} />
          <Route element={<AdminLayout />}>
            <Route
              path="/admin/people-management"
              element={<PeopleManagement />}
            />
            <Route path="/admin/people-register" element={<PeopleRegister />} />
            <Route
              path="/admin/work-category-manegement"
              element={<WorkCategoryManagement />}
            />
            <Route path="/admin/post-manegement" element={<PostManagement />} />
            <Route path="/admin/post-register" element={<PostRegister />} />
            <Route
              path="/admin/news-letter-manegement"
              element={<NewsLetterManagement />}
            />
            <Route
              path="/admin/news-letter-register"
              element={<NewsLetterRegister />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
