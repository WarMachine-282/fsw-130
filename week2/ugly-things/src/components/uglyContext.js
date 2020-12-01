import React, { Component } from "react";
const { Provider, Consumer } = React.createContext();

class ContextProvider extends Component {
  state = {
    uglyLists: [
      {
        uglyTitle: "Ugly Dumpster",
        uglydescription: "This is disgusting",
        uglyImage:
          "https://images.unsplash.com/photo-1510251197878-a2e6d2cb590c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8Z3Jvc3N8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60",
        comments: ["text"],
      },
      {
        uglyTitle: "Ugly Stairwell",
        uglydescription: "Wow ugly!",
        uglyImage:
          "https://images.unsplash.com/photo-1600876876753-60653741c19e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8aG9hcmRlcnxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60",
        comments: ["text"],
      },
      {
        uglyTitle: "Ugly House",
        uglydescription: "What a mess",
        uglyImage:
          "https://images.unsplash.com/photo-1592658221410-0f5c3615e7fc?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8b2xkJTIwaG91c2V8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60",
        comments: ["text"],
      },
    ],
  };

  updateItems = (uglyLists) => {
    console.log(uglyLists)
    this.setState({uglyLists});
  };

  render() {
    const {uglyLists} = this.state;
    return (
      <Provider value={{uglyLists: uglyLists, updateItems: this.updateItems}}>
        {this.props.children}
      </Provider>
    );
  }
}

export { ContextProvider, Consumer as ContextConsumer };


