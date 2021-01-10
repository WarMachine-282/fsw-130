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
        comments: ["I could smell it from here :("],
      },
      {
        uglyTitle: "Ugly Stairwell",
        uglydescription: "What a mess",
        uglyImage:
          "https://images.unsplash.com/photo-1600876876753-60653741c19e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8aG9hcmRlcnxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60",
        comments: ["Needs to call Mr.Clean"],
      },
      {
        uglyTitle: "Ugly House",
        uglydescription: "Wow ugly!",
        uglyImage:
          "https://images.unsplash.com/photo-1592658221410-0f5c3615e7fc?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8b2xkJTIwaG91c2V8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60",
        comments: ["Looks like my future home."],
      },
    ],
  };

  uglyDelete = (e) => {
    console.log("deleting");
    this.setState((prevState) => ({
      uglyLists: prevState.uglyLists.filter((thingItem, index) => {
        console.log("delete", e.target.id);
        return index !== Number(e.target.id);
      }),
    }));
  };
  uglyCommentDelete = (e, itemIndex) => {
    console.log("deleting", itemIndex);
    this.setState((prevState) => ({
      uglyLists: prevState.uglyLists.map((thingItem, index) => {
        console.log("delete", e.target.id);
        if (index === itemIndex) {
          console.log(index, itemIndex);
         thingItem.comments = thingItem.comments.filter((comment, i) => {
            console.log(i, Number(e.target.id));
            return i !== Number(e.target.id);
          });
        }
        return thingItem;
      }),
    }));
  };

  updateItems = (uglyLists) => {
    console.log(uglyLists);
    this.setState({ uglyLists });
  };

  render() {
    const { uglyLists } = this.state;
    return (
      <Provider
        value={{
          uglyLists: uglyLists,
          updateItems: this.updateItems,
          uglyDelete: this.uglyDelete,
          uglyCommentDelete: this.uglyCommentDelete,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { ContextProvider, Consumer as ContextConsumer };
