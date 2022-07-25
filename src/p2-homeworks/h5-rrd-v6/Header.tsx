import React from "react";
import { NavLink } from "react-router-dom";
import { PATH } from "../h5/Routes";

function Header() {
  return (
    <div>
      <NavLink to={"/pre-junior"}>PRE-JUNIOR</NavLink>
      <NavLink to={"/junior"}>JUNIOR</NavLink>
      <NavLink to={"/junior-plus"}>JUNIOR-PLUS</NavLink>
    </div>
  );
}

export default Header;
