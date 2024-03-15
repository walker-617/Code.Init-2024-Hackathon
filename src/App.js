import Encrypt from "./components/Encryption/Encrypt";
import "./App.css";

import {
  BrowserRouter,
  Routes,
  Route,
  MemoryRouter,
  useNavigate,
} from "react-router-dom";

function App() {
  return (
    // <MemoryRouter>
    <BrowserRouter>
      <Routes>
        <Route path="/" />
        <Route path="/encrypt/*" element={<Encrypt />} />
      </Routes>
    </BrowserRouter>
    // </MemoryRouter>
  );
}

export default App;
