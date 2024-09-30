import { Link, useLocation } from "react-router-dom";

import { MANAGEMENT_TAB_CONTENTS } from "./constants";

export default function ManagementTab() {
  const { pathname } = useLocation();

  return (
    <nav className="admin-side-bar">
      <ul className="admin-tab-container">
        {MANAGEMENT_TAB_CONTENTS.map(({ link, Icon, label }) => (
          <Link to={link}>
            <li
              className={
                link === pathname ? "admin-tab-active" : "admin-tab-item"
              }
            >
              <Icon
                className={
                  link === pathname
                    ? "admin-icon-active"
                    : "admin-icon-inActive"
                }
              />
              <span
                className={
                  link === pathname
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
    </nav>
  );
}
