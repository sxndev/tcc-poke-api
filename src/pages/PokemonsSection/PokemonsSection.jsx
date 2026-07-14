import { PokeList } from "../../components/PokeList/PokeList";
import { Header } from "../../components/Header/Header";
import { Searchbar } from "../../components/Searchbar/Searchbar";
import styled from "styled-components";


const StyledSection = styled.section`
    padding-top:20vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    background-color:var(--bg-color);
`
export const PokemonSection = () => {
    return (
        <>
        <Header/>
        <StyledSection>
        <Searchbar/>
        <PokeList/>
        </StyledSection>
        </>
    )
}