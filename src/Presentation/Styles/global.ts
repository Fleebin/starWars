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
    // @font-face {
    //   font-family: "StarJedi";
    //   src: local("StarJedi"),
    //     url("../Presentation/Assets/Fonts/StarJedi.ttf") format("truetype");
    // }
    // font-family: "StarJedi";
  }
`;