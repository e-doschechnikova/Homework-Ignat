import React from "react";
import { NavLink } from "react-router-dom";
import { PATH } from "../h5/Routes";

function Header() {
  return (
    <div>
      <NavLink to={'/l'}>PRE-JUNIOR</NavLink>
      {/* <NavLink to={PATH.PRE_JUNIOR}>PRE-JUNIOR</NavLink>
      <NavLink to={PATH.JUNIOR}>JUNIOR</NavLink>
      <NavLink to={PATH.JUNIOR_PLUS}>JUNIOR-PLUS</NavLink> */}
    </div>
  );
}

export default Header;
