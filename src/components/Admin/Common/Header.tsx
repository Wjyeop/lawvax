import { Link } from "react-router-dom";

import Logo from "../../../assets/images/ic_admin_logo.svg";

export default function Header() {
  return (
    <header className="admin-header">
      <Link to="/admin/people-management">
        <img src={Logo} alt="로고 아이콘" />
      </Link>
    </header>
  );
}
