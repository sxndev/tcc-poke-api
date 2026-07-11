import "../src/css/vars.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { PokemonSection } from './pages/PokemonsSection/PokemonsSection'
import { GlobalStyle } from "./css/GlobalStyle";  


function App() {
  return (
    <>
    <GlobalStyle/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemons" element={<PokemonSection/>} />
      </Routes>
    </>
  );
}

export default App;
