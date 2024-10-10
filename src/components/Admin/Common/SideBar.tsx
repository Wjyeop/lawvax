import { Link, useLocation, useNavigate } from "react-router-dom";

import {
  removeLocalAdminToken,
  removeSessionAdminToken,
} from "../../../utils/token";
import { MANAGEMENT_TAB_CONTENTS } from "../../../const/admin";
import Divider from "./Divider";
import Logout from "../../../assets/images/ic_admin_logout.svg";

export default function ManagementTab() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const onClickLogoutButton = () => {
    removeLocalAdminToken();
    removeSessionAdminToken();
    navigate("/admin/login");
  };

  return (
    <nav className="admin-side-bar">
      <ul className="admin-tab-container">
        {MANAGEMENT_TAB_CONTENTS.map(({ link, Icon, label, extraLink }) => (
          <Link key={`admin-sidebar-${label}`} to={link}>
            <li
              className={
                link === pathname || extraLink === pathname
                  ? "admin-tab-active"
                  : "admin-tab-item"
              }
            >
              <Icon
                className={
                  link === pathname || extraLink === pathname
                    ? "admin-icon-active"
                    : "admin-icon-inActive"
                }
              />
              <span
                className={
                  link === pathname || extraLink === pathname
                    ? "admin-text-active"
                    : "admin-text-inActive"
                }
              >
                {label}
              </span>
            </li>
          </Link>
        ))}
      </ul>
      <div>
        <Divider />
        <div className="admin-logout-btnWrap">
          <img src={Logout} alt="로그아웃 아이콘" />
          <button onClick={onClickLogoutButton} className="admin-logout-btn">
            로그아웃
          </button>
        </div>
      </div>
    </nav>
  );
}
