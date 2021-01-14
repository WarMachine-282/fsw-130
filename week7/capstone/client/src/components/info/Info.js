import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MuskContextConsumer } from "../musk/MuskContext";
import Header from "./infoHeader"
import "./info.css";

class Info extends Component {
  render() {
    return (
      <MuskContextConsumer>
        {(musk) => (
          <div>
              <Header/>
            <div class="info-container">
              <div className="info-item">
                <div>
                  <Link to="/" className="btn-2 btn-secondary">
                    HOME
                  </Link>
                </div>
                <div id="emailDisplay">
                  <p>Thank you for you inquiry.</p>
                  <p>
                    We will respond to <p className="bold">{musk.email}</p>
                  </p>
                  <p>in 3-5 business days.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </MuskContextConsumer>
    );
  }
}

export default Info;
