import "../src/css/vars.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/home";
import { GlobalStyle } from "./css/GlobalStyle";  
import { About } from './pages/About/About.jsx'

function App() {
  return (
    <>
    <GlobalStyle/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </>
  );
}
 
export default App;
 