import { Outlet } from "react-router-dom";

import Header from "../Header";
import HeaderMob from "../HeaderMob";
import CenterSide from "../CenterSide";
import Topbutton from "../TopButton";
import Footer from "../Footer";

export default function Layout() {
  return (
    <main className="App">
      <Header />
      <HeaderMob />
      <CenterSide />
      <Outlet />
      <Topbutton />
      <Footer />
    </main>
  );
}
