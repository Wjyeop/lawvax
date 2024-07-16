import React from "react";
import "../App.css";
import logo from "../assets/images/HeaderLogo.png";
import globe from "../assets/images/HeaderGlobe.png";
import phone from "../assets/images/HeaderPhoneCall.png";
import map from "../assets/images/HeaderMap.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header-section logo">
        <img src={logo} alt="Logo" className="logo-image" />
      </div>
      <div className="header-section nav">
        <nav>
          <ul>
            <li>
              <a href="#lawvax">LawVax</a>
            </li>
            <li>
              <a href="#services">업무분야</a>
            </li>
            <li>
              <a href="#team">구성원</a>
            </li>
            <li>
              <a href="#news">법인소식</a>
            </li>
            <li>
              <a href="#newsletter">뉴스레터</a>
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
