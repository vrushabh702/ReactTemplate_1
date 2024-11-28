import "./App.css";
import Topbar from "./Components/Topbar/Topbar";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Services from "./Components/Services/Servies";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Topbar></Topbar>
        <Navbar></Navbar>
        <Home></Home>
        <Routes>
          {/* <Route path="/" element={<Home></Home>} /> */}
          <Route path="/about" element={<About></About>} />
          <Route path="/service" element={<Services></Services>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
