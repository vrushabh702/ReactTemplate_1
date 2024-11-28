import "./App.css";
import Topbar from "./Components/Topbar/Topbar";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Services from "./Components/Services/Servies";

function App() {
  return (
    <div className="App">
      <Topbar></Topbar>
      <Navbar></Navbar>

      <About></About>
      <Services></Services>
    </div>
  );
}

export default App;
