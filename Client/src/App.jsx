import "./App.css"
import Topbar from "./Components/Topbar/Topbar"
import Navbar from "./Components/Navbar/Navbar"
import About from "./Components/About/About"
import Services from "./Components/Services/Servies"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./Components/Home/Home"
import Features from "./Components/Features/features"
import Offer from "./Components/Offer/offer"
// import Blog from "./Components/Blog/Blog"
// import Main from "./Components/Main/main"

function App() {
  return (
    <Router>
      <div className="App">
        <Topbar></Topbar>
        <Navbar></Navbar>
        {/* <Main></Main> */}
        <Routes>
          <Route path="/home" element={<Home></Home>} />
          <Route path="/about" element={<About></About>} />
          <Route path="/service" element={<Services></Services>} />
          <Route path="/feature" element={<Features></Features>} />
          <Route path="/offer" element={<Offer />} />
          {/* <Route path="/blog" element={<Blog></Blog>} /> */}
        </Routes>
      </div>
    </Router>
  )
}

export default App
