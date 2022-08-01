import React, { useState } from "react";
import { Turn as Hamburger } from "hamburger-react";
import { NavLink } from "react-router-dom";
import styles from "./HW5.module.css";

function Header() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const activeMenuStyle = isOpen && styles.menuActive;
  const showMenu = () => {
    setOpen(true);
  };
  const hideMenu = () => {
    setOpen(false);
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
          toggled={isOpen}
          toggle={setOpen}
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
