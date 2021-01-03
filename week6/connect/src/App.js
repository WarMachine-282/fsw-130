import React from "react";
import Header from "./semantics/Header/Header";
import Footer from "./semantics/Footer/Footer";
import { addPerson, removePerson, setInputs } from "./redux";
import { connect } from "react-redux";
import "./styles.css";

const App = (props) => {
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    props.setInputs(name, value);
  };
  const onClickDelete = (e, index) => {
    e.preventDefault();
    props.removePerson(index);
  };
  const onClickSubmit = (e) => {
    e.preventDefault();
    props.addPerson();
  };

  return (
    <div>
      <div>
        <Header />
        <form>
          <input
            id="input"
            name="name"
            onChange={handleChange}
            placeholder="Name"
            type="text"
            value={props.name}
          />
          <input
            id="input"
            name="email"
            onChange={handleChange}
            placeholder="Email"
            type="text"
            value={props.email}
          />
          <input
            id="input"
            name="phone"
            onChange={handleChange}
            placeholder="Phone"
            type="text"
            value={props.phone}
          />
          <button id="subBtn" type="submit" onClick={onClickSubmit}>
            Submit
          </button>
        </form>
        <div id="content">
          {props.contacts.map((contact, index) => (
            <div id="contacts">
              <p>{contact.name}</p>
              <p>{contact.email}</p>
              <p>{contact.phone}</p>
              <button id="delBtn" onClick={(e) => onClickDelete(e, index)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default connect(
  (state) => ({
    contacts: state.contacts,
    name: state.name,
    email: state.email,
    phone: state.phone,
  }),
  { addPerson, removePerson, setInputs }
)(App);
