import React, {Component} from "react";
import { ThemeContextConsumer } from "./ThemeContext";

const Navbar = (props) => {
  return (
    <ThemeContextConsumer>
      {(context) => (
        <nav className={`${context.theme}-theme`} id="Navbar">
            <a href="#home">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
        </nav>
      )}
    </ThemeContextConsumer>
  );
};
export default Navbar;
