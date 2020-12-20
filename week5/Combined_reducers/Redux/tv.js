const addShow = (show) => {
    return {
        type: "ADD_SHOW",
        payload: show
    }
}
const deleteShow = (show) => {
    return {
        type: "DELETE_SHOW",
        payload: show
    }
}
const getShows = (show) => {
    return {
        type: "GET_SHOWS",
        payload: show
    }
}

const showReducer = (shows = [], action) => {
    switch (action.type) {
      case "ADD_SHOW":
        return [...shows, action.payload];
      case "DELETE_SHOW": {
        const updatedArr = shows.filter((show) => show.toLowerCase() !== action.payload.toLowerCase());
        return updatedArr
      }
      case "GET_SHOWS":
      return [...shows]
      default:
        return shows
    }
  };

  module.exports = {addShow, deleteShow, getShows, showReducer}