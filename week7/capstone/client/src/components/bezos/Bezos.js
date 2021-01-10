import React, { Component } from "react";
import {Link} from "react-router-dom";
import { BezosContextConsumer } from "./BezosContext";

class Bezos extends Component {
  render() {
    return (
      <BezosContextConsumer>
        {(bezos) => (
          <div>
            <Link to="/">Go Back.</Link>
            <div>
              <ol>
                {console.log(bezos)}
                {bezos.achievements.map((index) => (
                  <li>
                    <hr />
                    <br />
                    <br />
                    <h1>{index.company}</h1>
                    <div className="center-content">
                    <p>Product - {index.product}</p>
                    <p>Description - {index.description}</p>
                    <p>Value - {index.worth}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        )}
      </BezosContextConsumer>
    );
  }
}

export default Bezos;
