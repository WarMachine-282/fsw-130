const redux = require("redux");

//Actions
const addPerson = (name) => {
  console.log(name, "payload");
  return {
    type: "ADD_PERSON",
    payload: name,
  };
};
const removePerson = (name) => {
  console.log(name, "payload");
  return {
    type: "REMOVE_PERSON",
    payload: name,
  };
};
// Reducers
const initialState = {
  contacts: [],
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_PERSON":
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case "REMOVE_PERSON":
      console.log(action.payload.name, "name");
      const updatedArr = state.contacts.filter((person) => {
        console.log(person.name.toLowerCase());
        return person.name.toLowerCase() !== action.payload.name.toLowerCase();
      });
      return {
        ...state,
        contacts: updatedArr,
      };
    default:
      return state;
  }
}
//Store
const store = redux.createStore(reducer);
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(
  addPerson({
    name: "Keanu Reeves",
    state: "California",
    occupation: "Saint",
  })
);
store.dispatch(
  removePerson({
    name: "Christian Van Loon",
    state: "California",
    occupation: "Student",
  })
);

