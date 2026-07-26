import "../src/css/vars.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home.jsx";
import { GlobalStyle } from "./css/GlobalStyle";  
import { About } from './pages/About/About.jsx'
import { PokeDetails } from "./pages/PokemonDetails/PokemonDetails.jsx";

function App() {
  return (
    <>
    <GlobalStyle/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/pokemon/:pokeData" element={<PokeDetails/>} />

      </Routes>
    </>
  );
}
 
export default App;
 