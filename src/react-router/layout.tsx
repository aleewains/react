import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import { Outlet } from "react-router";

function Layout() {
  return (
    <>
      <Header />
      <Outlet /> //this will be dynamically changing
      <Footer />
    </>
  );
}

export default Layout;
