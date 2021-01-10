import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div class="container">
      <div class="item">
        <h3>CLASH OF THE TITANS</h3>
        <h1>Who will win?</h1>
        <p>Each has be a significant force changing the world is drastic ways,</p>
        <p>or inspiring the next generations for years to come.</p>
        <Link to="/Bezos"><div className="btn btn-primary">Bezos</div></Link>
        <Link to="/Musk"><div className="btn btn-primary">Musk</div></Link>
      </div>
    </div>
  );
};

export default Home;
