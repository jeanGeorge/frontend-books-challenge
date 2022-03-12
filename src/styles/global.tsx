import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
	font-family: ${({ theme: { fonts } }) => fonts.family};
  }

`;

export default GlobalStyle;
