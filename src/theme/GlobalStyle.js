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
      background-color: "#333333";
      color: "#F9FAFB";
    }
    @media (prefers-reduced-motion) {
      & * {
        transform: none;
      }
    }
  }
`;
