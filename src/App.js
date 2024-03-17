import "./App.css";
import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  MemoryRouter,
  useNavigate,
  Link,
} from "react-router-dom";

import Encrypt from "./components/Encryption/Encrypt";
import Decrypt from "./components/Decryption/Decrypt";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";

function App() {
  return (
    // <MemoryRouter>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/encrypt/*" element={<Encrypt />} />
        <Route path="/decrypt/*" element={<Decrypt />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
    // </MemoryRouter>
  );
}

export default App;
