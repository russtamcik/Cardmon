import React from "react";
import { NavLink } from "react-router-dom";

const index = () => {
  return (
    <header>
      <nav className="container d-flex justify-content-between  header-bg">
        <NavLink className={"nav-item"} to="/home">
          Home
        </NavLink>
        <NavLink className={"nav-item"} to="/debts">
          Debts
        </NavLink>
        <NavLink className={"nav-item"} to="/transaction">
          Transaction
        </NavLink>
      </nav>
    </header>
  );
};

export default index;
