import { createGlobalStyle } from "styled-components";
import { mainFont } from "./Mixins";

export const GlobalStyle = createGlobalStyle`
  
  html {
    scroll-behavior: smooth;
    ${mainFont}
    font-size: 16px;
    line-height: 1.3;
    @media screen and (max-width: 1300px) {
      font-size: 15px;
    }
    @media screen and (max-width: 1024px) {
      font-size: 14px;
    }
  }
  body {
    margin: 0;
  }
  a, button {
    text-decoration: none;
    cursor: pointer;
  }
  * {
    color: ${props => props.theme.colors.primary};
    box-sizing: border-box;
  }
  input, button, video {
    outline: none;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
`;
