import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  html {
    box-sizing: border-box;
    font-size: 62.5%;
    min-width: 320px;
    padding: 0;
  margin: 0;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;    
    margin: 0;    
    padding: 0;  
    text-decoration: none;
  }
  * { font-family: 'Spoqa Han Sans', 'Spoqa Han Sans JP', 'Sans-serif';}
  a { cursor: pointer; text-decoration: none; }
`;
