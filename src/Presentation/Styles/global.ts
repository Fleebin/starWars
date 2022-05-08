import { createGlobalStyle } from 'styled-components';
export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: #000000 ;
    text-transform: uppercase;
    font-family: monospace;
  }
  @font-face {
    font-family: "StarJedi";
      src: local("StarJedi"),
      url("../Assets/Fonts/StarJedi.ttf") format("truetype");
  }
`;