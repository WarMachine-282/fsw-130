const redux = require("redux")
const {combineReducers, createStore} = redux
const {movieReducer} = require("./movies.js")
const {showReducer} = require("./tv.js")

const rootReducer = combineReducers({
    movies: movieReducer,
    shows: showReducer
})

const store = createStore(rootReducer)
store.subscribe(() => {
    console.log(store.getState())
})

module.exports = store