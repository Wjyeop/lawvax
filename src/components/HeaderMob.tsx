/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { css } from "@emotion/react";
import img from "../assets/images/img";

function HeaderMob() {
  const location = useLocation();
  const isMainPage = location.pathname === "/";
  const [isNavVisible, setNavVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleNav = () => {
    setNavVisible(!isNavVisible);
  };

  const closeNav = () => {
    setNavVisible(false);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    if (isMainPage) {
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMainPage]);

  return (
    <div className="header-mob">
      <div css={header_wrap}>
        <div css={side_btn} onClick={toggleNav}>
          <span css={line(isMainPage, isScrolled)}></span>
          <span css={line(isMainPage, isScrolled)}></span>
          <span css={line(isMainPage, isScrolled)}></span>
        </div>
      </div>

      <nav css={nav_style(isNavVisible)}>
        <div css={btn_container}>
          <button css={close_btn} onClick={closeNav}>
            <img src={img.icons.closeBtn} alt="닫기 버튼" />
          </button>
        </div>

        <ul css={link_1}>
          <li>
            <Link to="/" onClick={closeNav}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/intro" onClick={closeNav}>
              LawVax
            </Link>
          </li>
          <li>
            <Link to="/workfield" onClick={closeNav}>
              업무분야
            </Link>
          </li>
          <li>
            <Link to="/members" onClick={closeNav}>
              구성원
            </Link>
          </li>
          <li>
            <Link to="/news" onClick={closeNav}>
              법인소식
            </Link>
          </li>
          <li>
            <Link to="/newsletter" onClick={closeNav}>
              뉴스레터
            </Link>
          </li>
        </ul>

        <hr />

        <ul css={link_2}>
          <Link to="/support-center" onClick={closeNav}>
            <li>기업 감사/내부통제 지원</li>
          </Link>
          <Link to="/tech-center" onClick={closeNav}>
            <li>기술보호센터</li>
          </Link>
        </ul>

        <hr />

        <ul css={link_2}>
          <li>오시는 길</li>
          <li>연락처</li>
        </ul>
      </nav>
    </div>
  );
}

export default HeaderMob;

const header_wrap = css`
  height 96px;
  position: fixed;
  top: 0;
  display: flex;
  z-index: 1100;
  align-items: center;
  justify-content: flex-start;
`;

const side_btn = css`
  width: 48px;
  height: 48px;
  margin: 24px 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const line = (isMainPage: any, isScrolled: any) => css`
  width: 36px;
  height: 3px;
  background-color: ${isMainPage && !isScrolled
    ? `var(--mono-white)`
    : `var(--point-color-3)`};
  margin: 3px 0;
  border-radius: 30px;
`;

const nav_style = (isNavVisible: any) => css`
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 1080px;
  height: 100vh;
  background-color: var(--mono-white);
  padding: 28px 16px 0 16px;

  transform: ${isNavVisible ? "translateX(0)" : "translateX(-100%)"};
  transition: transform 0.3s ease-in-out;

  justify-content: flex-start;
  overflow-y: auto;
  box-sizing: border-box;
  z-index: 12000;

  hr {
    border: 1px solid var(--mono-gray-line-1);
    margin: 0;
  }

  li,
  span {
    cursor: pointer;
  }

  @media (min-width: 1280px) {
    display: ${isNavVisible ? "block" : "none"};
  }
`;

const btn_container = css`
  display: flex;
  top: 0;
  width: 100%;

  align-items: start;
  justify-content: end;
  font-size: 20px;
  line-height: 26px;
  font-weight: 400;
  padding: 0 16px 0 32px;
  box-sizing: border-box;
`;

const close_btn = css`
  width: 48px;
  height: 48px;
  padding: 0;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

const link_1 = css`
  padding: 28px 32px 48px;
  color: var(--mono-gray-txt-dark);
  display: flex;
  flex-direction: column;
  gap: 44px;

  li {
    font-size: 32px;
    font-weight: 400;

    a {
      font-weight: 400;
      text-decoration: none;
      color: inherit;
    }
  }
`;

const link_2 = css`
  padding: 44px 32px;
  color: var(--mono-gray-txt-dark);
  display: flex;
  flex-direction: column;
  gap: 28px;

  li {
    font-size: 20px;
    font-weight: 400;
  }
`;
