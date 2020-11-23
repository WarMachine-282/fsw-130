import React from "react";
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Footer from "./components/Footer"
import "./styles.css"

const App = () => {
  return (
    <div>
      <Navbar/>
      <Main/>
      <Footer/>
    </div>
  )
}
export default App