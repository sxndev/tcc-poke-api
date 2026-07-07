import styled from "styled-components"
const StyledButton = styled.button`
    width:100%;
    max-width:250px; 
    height:50px;
    border-radius:30px; 
    color:var(--light-color);
    background-color:var(--accent-color);
    font-weight:bold;
    transition:transform ease 0.5s, box-shadow ease 0.5s;
    &:hover{
        transform:translateY(-5px);
    }
`
export const Button = ({text, onClick}) => {
    return ( 
        <StyledButton onClick={onClick}>{text}</StyledButton>
    )
}