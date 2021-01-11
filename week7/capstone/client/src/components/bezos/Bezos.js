import React, { Component } from "react";
import { BezosContextConsumer } from "./BezosContext";
import BezosHeader from "./BezosHeader"
import Footer from "../footer/Footer"
import "../alignment.css"
import "./BezosImage.css"

class Bezos extends Component {
  render() {
    return (
      <BezosContextConsumer>
        {(bezos) => (
          <div>
            <BezosHeader/>
            <div className="bezos-bg">
              <div className="items">
              {bezos.achievements.map((index) => (
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
      </BezosContextConsumer>
    );
  }
}

export default Bezos;
