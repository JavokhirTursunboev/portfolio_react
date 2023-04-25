import React from "react";
import "./menu.scss";
import MenuItem from "./MenuItem";

const Menu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <MenuItem setM={setMenuOpen} text="Home" />
        <MenuItem setM={setMenuOpen} text="Portfolio" />
        <MenuItem setM={setMenuOpen} text="Works" />
        <MenuItem setM={setMenuOpen} text="Testimonials" />
        <MenuItem setM={setMenuOpen} text="Contact" />
      </ul>
    </div>
  );
};

export default Menu;
