import "./App.css";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Evaluate from "./pages/Evaluate";
import Interpret from "./pages/Interpret";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Explore" element={<Explore />} />
          <Route path="/Evaluate" element={<Evaluate />} />
          <Route path="/Interpret" element={<Interpret />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;