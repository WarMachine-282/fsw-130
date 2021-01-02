import {createStore} from "redux"
const redux = require("redux");

//Actions
export function addPerson(name) {
  return {
    type: "ADD_PERSON",
    payload: name,
  };
};
export function removePerson(id) {
  return {
    type: "REMOVE_PERSON",
    payload: id,
  };
};
export function setInputs(name, value) {
    return {
        type: "SET_INPUTS",
        payload: {name, value}
    }
}
// Reducers
const initialState = {
  contacts: [],
  name: "",
  email: "",
  phone: ""
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_PERSON":
      return {
        ...state,
        contacts: [...state.contacts, {name: state.name, email: state.email, phone: state.phone}],
        name: "",
        email: "",
        phone: ""
      };
    case "REMOVE_PERSON":
      let updatedArr = [...state.contacts]
      updatedArr.splice(action.payload, 1)
      return {
        ...state,
        contacts: updatedArr,
      };
    case "SET_INPUTS":
        return {
            ...state, [action.payload.name] : action.payload.value
        }
    default:
      return state;
  }
}

//Store
const store = createStore(reducer);
store.subscribe(() => {
  console.log(store.getState());
});

export default store