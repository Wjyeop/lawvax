import React from "react";
import "../App.css";
import logo from "../assets/images/HeaderLogo.png";
import globe from "../assets/images/HeaderGlobe.png";
import phone from "../assets/images/HeaderPhoneCall.png";
import map from "../assets/images/HeaderMap.png";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isCenterPage =
    location.pathname === "/support-center" ||
    location.pathname === "/tech-center";

  if (isCenterPage) {
    return (
      <header className="center-header">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo-image" />
        </Link>
      </header>
    );
  }

  return (
    <header className="header">
      <div className="header-section logo">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo-image" />
        </Link>
      </div>
      <div className="header-section nav">
        <nav>
          <ul>
            <li>
              <Link to="/intro">LawVax</Link>
            </li>
            <li>
              <Link to="/services">업무분야</Link>
            </li>
            <li>
              <Link to="/members">구성원</Link>
            </li>
            <li>
              <Link to="/news">법인소식</Link>
            </li>
            <li>
              <Link to="/newsletter">뉴스레터</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header-section icons">
        <img src={globe} alt="globe" className="icon" />
        <img src={phone} alt="phone" className="icon" />
        <img src={map} alt="map" className="icon" />
      </div>
    </header>
  );
};

export default Header;
