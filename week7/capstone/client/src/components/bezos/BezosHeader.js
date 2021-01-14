import React from "react";
import { Link } from "react-router-dom";
import "../header.css"

const BezosHeader = () => {
  return (
  <div className="head-container">
    <div className="foo">
      <Link to="/" className="btn-2 btn-secondary">Go Back</Link>
      <Link to="/Form" className="btn-2 btn-secondary">Info</Link>
      <span className="letter" data-letter="B">B</span>
      <span className="letter" data-letter="E">E</span>
      <span className="letter" data-letter="Z">Z</span>
      <span className="letter" data-letter="O">O</span>
      <span className="letter" data-letter="S">S</span>
    </div>
  </div>
  );
};

export default BezosHeader;
