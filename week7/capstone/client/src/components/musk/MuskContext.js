import React, { Component } from "react";
const { Provider, Consumer } = React.createContext();

class MuskContextProvider extends Component {
  state = {
    achievements: [
      {
        company: "Tesla Motors",
        product: "Electric car",
        description: "Making electric vehicles popular.",
        worth: "$880 billion",
      },
      {
        company: "SpaceX",
        product: "Falcon rocket",
        description: "Makes space travel viable",
        worth: "$92 billion",
      },
      {
        company: "PayPal",
        product: "E-payments",
        description: "Revolutionalized online payments.",
        worth: "$127 billion",
      },
      {
        company: "Hyperloop",
        product: "Solar-power systems",
        description: "Improving transportation roadways.",
        worth: "$400 million",
      },
      {
        company: "Neuralink",
        product: "Brain-computer interfaces",
        description: "Fuses our brains to Ai",
        worth: "$158 million",
      },
      {
        company: "Blastar",
        product: "Video game",
        description: "First achievement when he was twelve.",
        worth: "$500",
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

export { MuskContextProvider, Consumer as MuskContextConsumer };
