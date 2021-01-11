import React, { Component } from "react";
const { Provider, Consumer } = React.createContext();

class BezosContextProvider extends Component {
  state = {
    achievements: [
      {
        company: "Amazon",
        product: "E-commerce",
        description: "Revolutionized the way we shop.",
        worth: "$1.7 trillion",
      },
      {
        company: "Blue Origin",
        product: "New Shepard",
        description: "To provide sustainable space travel to the moon.",
        worth: "$579 million",
      },
      {
        company: "The Washington Post",
        product: "Journalism",
        description: "Leader in online journalism.",
        worth: "$250 million",
      },
      {
        company: "Whole Foods",
        product: "Grocery Chain",
        description: "Sells the Highest Quality Natural and Organic Foods",
        worth: "$13.7 billion",
      },
      {
        company: "Grail",
        product: "Blood test",
        description: "Screens to detect for cancer early",
        worth: "$100 million",
      },
      {
        company: "Everfi",
        product: "Education software",
        description: "Teaches students to make wise financial decisions.",
        worth: "$190 million",
      },
    ],
  };

  render() {
    return (
      <Provider
        value={{
          achievements: this.state.achievements,
          company: this.state.company,
          product: this.state.product,
          description: this.state.description,
          worth: this.state.worth,
        }}>
        {this.props.children}
      </Provider>
    );
  }
}

export { BezosContextProvider, Consumer as BezosContextConsumer };
