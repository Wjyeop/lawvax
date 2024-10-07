import { useState } from "react";

import CheckBox from "../../../components/Admin/CheckBox";
import Logo from "../../../assets/images/ic_admin_loginLogo.svg";
import Eyes from "../../../assets/images/ic_admin_eyes.svg";

export default function Login() {
  const [isCheck, setIsCheck] = useState(false);
  const [isPasswordShow, setIsPasswordShow] = useState(false);

  const handleSingleCheck = () => {
    setIsCheck((prev) => !prev);
  };

  const handlePasswordShow = () => {
    setIsPasswordShow((prev) => !prev);
  };

  return (
    <section className="admin-login-layout">
      <div>
        <img src={Logo} alt="로고" />
      </div>
      <div className="admin-login-wrap">
        <div className="admin-login-inputWrap">
          <label htmlFor="id" className="admin-login-label">
            아이디
          </label>
          <input
            type="text"
            placeholder="아이디를 입력해주세요."
            id="id"
            className="admin-login-input"
          />
        </div>
        <div className="admin-login-inputWrap">
          <label htmlFor="pw" className="admin-login-label">
            비밀번호
          </label>
          <input
            type={isPasswordShow ? "text" : "password"}
            placeholder="비밀번호를 입력해주세요."
            id="pw"
            className="admin-login-input"
          />

          <img
            onClick={handlePasswordShow}
            src={Eyes}
            alt="눈 모양 아이콘"
            className="admin-eyes"
          />
        </div>
        <CheckBox label="자동 로그인" handleSingleCheck={handleSingleCheck} />
        <button type="button" className="admin-login-btn">
          로그인
        </button>
      </div>
    </section>
  );
}
