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
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}
  }


  body {
    font-family: 'Pretendard-Regular', sans-serif;
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
