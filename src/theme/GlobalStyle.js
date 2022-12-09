import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GloblaStyle = createGlobalStyle`
  ${reset}
  *, *::before, *::after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;

    @font-face {
      font-family: 'NanumBarunGothic';
      font-style: normal;
      font-weight: 400;
      src: url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.eot');
      src: url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.eot?#iefix') format('embedded-opentype'), 
           url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.woff') format('woff'), 
           url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.ttf') format('truetype');
    }
  }


  body {
    font-family: 'NanumBarunGothic', sans-serif;
    background: ${({ theme }) => theme.bgColor};
    color: ${({ theme }) => theme.textColor};
    transition: all 0.5s;



    @media (prefers-color-scheme: dark) {
      background: "#292929";
      color: "#F9FAFB";
    }
    @media (prefers-color-scheme: light) {
      background: "white";
      color: "#484848";
    }
    @media (prefers-reduced-motion) {
      & * {
        transform: none;
      }
    }
  }
`;
