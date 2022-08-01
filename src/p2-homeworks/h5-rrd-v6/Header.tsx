import React, { useState } from "react";
import { Turn as Hamburger } from "hamburger-react";
import { NavLink } from "react-router-dom";
import styles from "./HW5.module.css";

function Header() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const openMenuStyle = isOpen && styles.menuOpen;
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
          color={"#4c2f27"}
          size={20}
          toggled={isOpen}
          toggle={setOpen}
        />
        <div className={`${styles.menu} ${openMenuStyle}`}>
          <li>
            <NavLink to="/pre-junior">Pre-Junior</NavLink>
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
