import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Pastes from "./components/Pastes";
import Viewpaste from "./components/Viewpaste";

function App() {
  return (
    <HashRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/pastes" element={<Pastes />} />

        <Route path="/pastes/:id" element={<Viewpaste />} />
      </Routes>
    </HashRouter>
  );
}

export default App;