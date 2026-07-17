import "../src/css/vars.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/home";
import { GlobalStyle } from "./css/GlobalStyle";  
import { PokeDetails } from "./pages/PokemonDetails/PokemonDetails";
import { PokemonSection } from "./pages/PokemonsSection/PokemonsSection";
      
function App() {
  return (
    <>
    <GlobalStyle/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemons" element={<PokemonSection/>} />
        <Route path="/pokemons/:pokedata" element={<PokeDetails/>} />
      </Routes>
    </>
  );
}
 
export default App;
 