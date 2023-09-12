import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";

import Header from "../header";

const Layout = () => {
  return (
    <Fragment>
      <Header />
      <main className="container">
        <Outlet />
      </main>
    </Fragment>
  );
};

export default Layout;
