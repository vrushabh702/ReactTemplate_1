import "./App.css";
import Topbar from "./Components/Topbar/Topbar";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";

function App() {
  return (
    <div className="App">
      <Topbar></Topbar>
      <Navbar></Navbar>

      <About></About>
    </div>
  );
}

export default App;
