import React, { Component } from "react";
import { MovieContextConsumer } from "./movieContext";
import "./Movies.css"

class Movies extends Component {
  render() {
    return (
      <MovieContextConsumer>
        {context => ( 
        <div>
            <form>
                <input className="inputs" type="text" name="title" value={context.title} placeholder="title" onChange={context.handleChange}/>
                <input className="inputs" type="text" name="director" value={context.director} placeholder="director" onChange={context.handleChange}/>
                <input className="inputs" type="text" name="genre" value={context.genre} placeholder="genre" onChange={context.handleChange}/>
                <input className="inputs" type="text" name="year" value={context.year} placeholder="year" onChange={context.handleChange}/>
                <input type="submit" onClick={(context.movieUpdate)} value="Submit"/>
                <div className="movies">
                    {context.movies.map((movieInfo, index) => <div id={index} key={movieInfo}>
                  <div className="title">
                    <h3>Title: {movieInfo.title}</h3>
                  </div>
                  <div className="director">
                    <h4>director: {movieInfo.director}</h4>
                  </div>
                  <div className="genre">
                    <h4>genre: {movieInfo.genre}</h4>
                  </div>
                  <div className="year">
                    <h4>year: {movieInfo.year}</h4>
                  </div>
                    </div>)}
                </div>
            </form>
        </div>
        )}
      </MovieContextConsumer>
    );
  }
}
export default Movies