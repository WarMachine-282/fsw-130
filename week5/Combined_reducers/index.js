const store = require("./Redux/index")
//movies
const {addMovie, deleteMovie, getMovies} = require("./Redux/movies")
//shows
const {addShow, deleteShow, getShows} = require("./Redux/tv")
//dispatch
store.dispatch(addMovie("A New Hope"))
store.dispatch(addMovie("Gangs Of New York"))
store.dispatch(addMovie("OldBoy"))
console.log("\n Adding movies^ \n")

store.dispatch(addShow("Mandalorian"))
console.log("\n Adding Mandalorian^ \n")
store.dispatch(addShow("Game Of Thrones"))
console.log("\n Adding Game Of Thrones^ \n")
store.dispatch(addShow("The Wire"))
console.log("\n Adding The Wire^ \n")

store.dispatch(deleteMovie("OldBoy"))
console.log("\n Deleting The Oldboy^ \n")
store.dispatch(deleteShow("Mandalorian"))
console.log("\n Deleting Mandalorian^ \n")

store.dispatch(getMovies())
console.log("\n Getting Movies^ \n")
store.dispatch(getShows())
console.log("\n Getting Tv Shows^ \n")