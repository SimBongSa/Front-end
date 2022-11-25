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
    /* ::-webkit-scrollbar {
      width: 10px;
    }
    
    ::-webkit-scrollbar-track {
      background: #eeeeee;
    }
    
    ::-webkit-scrollbar-thumb {
      border-radius: 15px;
      background: linear-gradient(${(props) => props.theme.btnColor}, ${(props) => props.theme.subBtnColor});
    } */
  }
`;
