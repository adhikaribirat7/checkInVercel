import React from "react";
import Nav from "../components/Nav/Nav";
import Footer from "../components/footer/footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="grid sm:grid-col-12 grid-col-7 grid-flow-row">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
