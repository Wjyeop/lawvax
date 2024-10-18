import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { tryLogin } from "../../../api/admin";
import CheckBox from "../../../components/Admin/Common/CheckBox";
import Logo from "../../../assets/images/ic_admin_loginLogo.svg";
import Eyes from "../../../assets/images/ic_admin_eyes.svg";
import {
  saveLocalAdminToken,
  saveSessionAdminToken,
} from "../../../utils/token";

export default function Login() {
  const navigate = useNavigate();
  const [isCheck, setIsCheck] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const [account, setAccount] = useState({
    identifier: "",
    password: "",
  });

  const handleSingleCheck = () => {
    setIsCheck((prev) => !prev);
  };

  const handlePasswordShow = () => {
    setIsPasswordShow((prev) => !prev);
  };

  const onClickLoginButton = async () => {
    try {
      setIsLoading(true);
      const { data } = await tryLogin(account);
      if (!isCheck) {
        saveSessionAdminToken(data);
        return navigate("/admin/people-management", { replace: true });
      }

      saveLocalAdminToken(data);
      return navigate("/admin/people-management", { replace: true });
    } catch (error) {
      alert("아이디 혹은 비밀번호를 다시 입력해주세요.");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
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
            onChange={(e) =>
              setAccount({ ...account, identifier: e.target.value })
            }
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
            onChange={(e) =>
              setAccount({ ...account, password: e.target.value })
            }
          />

          <img
            onClick={handlePasswordShow}
            src={Eyes}
            alt="눈 모양 아이콘"
            className="admin-eyes"
          />
        </div>
        <CheckBox label="자동 로그인" handleSingleCheck={handleSingleCheck} />
        <button
          onClick={onClickLoginButton}
          type="button"
          className="admin-login-btn"
          disabled={isLoading}
        >
          로그인
        </button>
      </div>
    </section>
  );
}
