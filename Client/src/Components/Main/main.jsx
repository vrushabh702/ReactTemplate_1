import React from "react"

import About from "../About/About"
import Services from "../Services/Servies"
import Home from "../Home/Home"
import Features from "../Features/features"

const Main = () => {
  return (
    <div className="App">
      <Home></Home>
      <About></About>
      <Services></Services>
      <Features></Features>
    </div>
  )
}

export default Main
