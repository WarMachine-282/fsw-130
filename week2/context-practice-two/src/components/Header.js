import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <h1>Movies</h1>
      <nav id="Navbar">
        <a href="#home">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </nav>
    </header>
  );
};

export default Header;
