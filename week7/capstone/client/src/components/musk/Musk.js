import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MuskContextConsumer } from "./MuskContext";
import "./Musk.css"

class Musk extends Component {
  render() {
    return (
      <MuskContextConsumer>
        {(musk) => (
          <div>
            <Link to="/">Go Back.</Link>
            <div>
              <ol>
                {console.log(musk)}
                {musk.achievements.map((index) => (
                  <li>
                    <hr />
                    <br />
                    <br />
                    <h1>{index.company}</h1>
                    <div className="center-content">
                    <p>{index.product}</p>
                    <p>{index.description}</p>
                    <p>{index.worth}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        )}
      </MuskContextConsumer>
    );
  }
}

export default Musk;
