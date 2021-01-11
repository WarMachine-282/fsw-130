import React, { Component } from "react";
import { MuskContextConsumer } from "./MuskContext";
import MuskHeader from "./MuskHeader"
import Footer from "../footer/Footer"
import "../alignment.css"
import "./MuskImage.css"

class Musk extends Component {
  render() {
    return (
      <MuskContextConsumer>
        {(musk) => (
          <div>
            <MuskHeader/>
            <div className="musk-bg">
              <div className="items">
                {musk.achievements.map((index) => (
                  <div className="page-content">
                    <div className="card">
                      <div className="content">
                        <h2 className="title">{index.company}</h2>
                        <p className="copy">{index.product}</p>
                        <p className="copy">{index.description}</p>
                        <p className="copy">{index.worth}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Footer/>
          </div>
        )}
      </MuskContextConsumer>
    );
  }
}

export default Musk;
