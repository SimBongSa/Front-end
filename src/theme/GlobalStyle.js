import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GloblaStyle = createGlobalStyle`
  ${reset}
  *, *::before, *::after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
};



  body {
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
