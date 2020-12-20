const addMovie = (movie) => {
  return {
    type: "ADD_MOVIE",
    payload: movie,
  };
};
const deleteMovie = (movie) => {
  return {
    type: "DELETE_MOVIE",
    payload: movie,
  };
};
const getMovies = (movie) => {
    return {
      type: "GET_MOVIES",
      payload: movie,
    };
  };

const movieReducer = (movies = [], action) => {
  switch (action.type) {
    case "ADD_MOVIE":
      return [...movies, action.payload];
    case "DELETE_MOVIE": {
      const updatedArr = movies.filter((movie) => movie.toLowerCase() !== action.payload.toLowerCase());
      return updatedArr
    }
    case "GET_MOVIES":
    return [...movies]
    default:
      return movies
  }
};
module.exports = {addMovie, deleteMovie, getMovies, movieReducer}