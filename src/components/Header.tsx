import "../App.css";
import logo from "../assets/images/HeaderLogo.png";
import marker from "../assets/images/icons/marker.png";
import phone from "../assets/images/HeaderPhoneCall.png";
import { Link } from "react-router-dom";

const Header = () => {
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
              <Link to="/workfield">업무분야</Link>
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
        <img src={marker} alt="marker" className="icon" />
        <img src={phone} alt="phone" className="icon" />
      </div>
    </header>
  );
};

export default Header;
