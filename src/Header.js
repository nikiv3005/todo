import React from "react";
import logo from "./assets/Logo.jpeg";

const Header = () => {
  return (
    <header>
      <img alt="Logo" src={logo} />
      <h2>Nicole To Do List</h2>
    </header>
  );
};

export default Header;
