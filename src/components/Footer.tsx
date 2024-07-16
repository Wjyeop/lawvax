import React from "react";
import logo from "../assets/images/FooterLogo.png";
import blog from "../assets/images/FooterBlog.png";
import insta from "../assets/images/FooterInsta.png";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="section1">
          <div className="footer-logo">
            <img src={logo} alt="Logo" className="footer-logo-image" />
          </div>
          <div className="footer-icons">
            <img src={blog} alt="blog" className="icon" />
            <img src={insta} alt="insta" className="icon" />
          </div>
        </div>
        <div className="section2">
          <p className="footer-links">개인정보처리방침 | 면책공고 | 유한책임</p>
          <p className="footer-address">
            서울특별시 서초구 사임당로 18 석오빌딩 3층, 9층 법무법인 로백스 |
            공동대표 김기동, 이동열
          </p>
          <p className="footer-contact">
            대표 전화: 02) 583 6300 | fax: 02) 583 6303
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
