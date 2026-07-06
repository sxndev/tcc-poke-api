import styled from "styled-components"
const StyledButton = styled.button`
    width:200px;
    height:50px;
    border-radius:30px;
    color:var(--light-color);
    background-color:var(--accent-color);
    font-weight:bold;
    transform:translateX(50vw);
    transition:transform ease 0.5s;
    &:hover{
        transform:translate(50vw,-5px);
    }
`
export const Button = ({text, onClick}) => {
    return ( 
        <StyledButton onClick={onClick}>{text}</StyledButton>
    )
}