import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { MuskContextConsumer } from "../musk/MuskContext";
import Header from "./infoHeader"
import "./info.css";

const Form = () => {
  const newPage = useHistory();
  const [newEmail, setNewEmail] = useState("");
  return (
    <MuskContextConsumer>
      {(musk) => (
        <div>
            <Header/>
          <div class="info-container">
            <div className="form-item">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  musk.emailUpdate(newEmail);
                  newPage.push("/Info");
                }}
              >
                <div className="form_group">
                  <input
                    id="form_label"
                    className="form_field"
                    name="email"
                    type="text"
                    value={newEmail}
                    placeholder="Email..."
                    onChange={(e) => setNewEmail(e.target.value)}
                  />
                </div>
                <div>
                  <button className="btn-2 btn-secondary">Submit</button>
                  <Link to="/" className="btn-2 btn-secondary">
                    HOME
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </MuskContextConsumer>
  );
};

export default Form;
