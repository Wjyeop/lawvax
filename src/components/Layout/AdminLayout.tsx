import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <main className="layout">
      <Outlet />
    </main>
  );
}
