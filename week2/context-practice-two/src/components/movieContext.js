import React, { Component } from "react";
const { Provider, Consumer } = React.createContext();

class MovieContextProvider extends Component {
  state = {
    movies: [
      {
        title: "Star Wars: Episode IV A New Hope",
        director: "George Lucas",
        genre: "space-opera",
        year: "1977",
      },
      {
        title: "Gangs of New York",
        director: "Martin Scorsese",
        genre: "Historic Crime",
        year: "2002",
      },
      {
        title: "Oldboy",
        director: "Park Chan-wook",
        genre: "neo-noir action thriller",
        year: "2003",
      },
    ],
    title: "",
    director: "",
    genre: "",
    year: ""
  };

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  movieUpdate = (e) => {
    e.preventDefault();
    this.setState({
      movies: this.state.movies.concat({
        title: this.state.title,
        director: this.state.director,
        genre: this.state.genre,
        year: this.state.year,
      }),
      title: "",
      director: "",
      genre: "",
      year: "",
    });
  };
  render() {
    return (
      <Provider
        value={{
          movies: this.state.movies,
          title: this.state.title,
          director: this.state.director,
          genre: this.state.genre,
          year: this.state.year,
          handleChange: this.handleChange,
          movieUpdate: this.movieUpdate,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { MovieContextProvider, Consumer as MovieContextConsumer };
