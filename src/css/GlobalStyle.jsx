import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family:"Poppins", sans-serif;
}

html {
  scroll-behavior: smooth;
}

body {
  min-height: 100vh;
  overflow-x: hidden;
}


img{
  display: block;
  max-width: 100%;
  height: auto;
}

/* 6. Formulários herdam a tipografia do app (não a do navegador) */
input,
button,
textarea,
select {
  color: inherit;
}

button {
  cursor: pointer;
  border: none;
}

ul, ol {
  list-style: none;
}

a {
  color: inherit;
  text-decoration: none;
}



  
`;