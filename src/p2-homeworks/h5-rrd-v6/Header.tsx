import React, { useState } from "react";
import { Turn as Hamburger } from "hamburger-react";
import { NavLink } from "react-router-dom";
import styles from "./HW5.module.css";

function Header() {
  const [isActive, setIsActive] = useState<boolean>(false);
  const activeMenuStyle = isActive && styles.menuActive;
  const showMenu = () => {
    setIsActive(true);
  };
  const hideMenu = () => {
    setIsActive(false);
  };

  return (
    <div className={styles.navMenu}>
      <div
        className={styles.nav}
        onMouseEnter={showMenu}
        onMouseLeave={hideMenu}
      >
        <Hamburger
          color={"#79443b"}
          size={20}
          toggled={isActive}
          toggle={setIsActive}
        />
        <div className={`${styles.menu} ${activeMenuStyle}`}>
          <li>
            <NavLink to="/pre-junior"> Pre-Junior </NavLink>
          </li>
          <li>
            <NavLink to="/junior">Junior</NavLink>
          </li>
          <li>
            <NavLink to="/junior-plus">Junior+</NavLink>
          </li>
        </div>
      </div>
    </div>
  );
}

export default Header;
