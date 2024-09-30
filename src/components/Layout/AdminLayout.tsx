import { Outlet } from "react-router-dom";

import Header from "../Admin/Header";
import SideBar from "../Admin/SideBar";

export default function AdminLayout() {
  return (
    <main className="admin-layout">
      <Header />
      <div className="admin-contents-layout">
        <SideBar />
        <Outlet />
      </div>
    </main>
  );
}
