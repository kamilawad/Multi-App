import "./styles/utilities.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Weather from "./pages/Weather";
import Calculator from "./pages/Calculator";
import Notes from "./pages/Notes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/Notes" element={<Notes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
