import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import App from './App';
import {MovieContextProvider} from "./components/movieContext";

ReactDOM.render(
  <MovieContextProvider>
    <App />
  </MovieContextProvider>,
  document.getElementById('root')
);

