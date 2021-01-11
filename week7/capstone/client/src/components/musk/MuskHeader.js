import React from "react";
import { Link } from "react-router-dom";
import "../header.css"

const MuskHeader = () => {
  return (
  <div className="head-container">
    <div className="foo">
      <Link to="/" className="btn-2 btn-secondary">Go Back.</Link>
      <span className="letter" data-letter="M">M</span>
      <span className="letter" data-letter="U">U</span>
      <span className="letter" data-letter="S">S</span>
      <span className="letter" data-letter="K">K</span>
    </div>
  </div>
  );
};

export default MuskHeader;
