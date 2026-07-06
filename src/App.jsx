import "../src/css/vars.css";
import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./css/GlobalStyle";

import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
function App() {
  return (
    <>
    <GlobalStyle/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
