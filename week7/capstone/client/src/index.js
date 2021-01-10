import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import {MuskContextProvider} from "./components/musk/MuskContext"
import {BezosContextProvider} from "./components/bezos/BezosContext"
ReactDOM.render(
  <BezosContextProvider>
  <MuskContextProvider>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </MuskContextProvider>
  </BezosContextProvider>
  ,
  document.getElementById('root')
);


