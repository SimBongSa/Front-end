import Router from "./shared/Router";
import styled from "styled-components";
import { useState } from "react";
import { BsFillMoonFill } from "react-icons/bs";

function App() {
  return (
    <div className="App">
      <Router />
      <LightThemeBtn>
        <BsFillMoonFill />
      </LightThemeBtn>
    </div>
  );
}

export default App;

const LightThemeBtn = styled.button`
  cursor: pointer;
  position: fixed;
  bottom: 30px;
  right: 30px;
  border-radius: 1rem;
  background: ${(props) => props.theme.GREY};
  color: ${(props) => props.theme.BLACK};
  padding: 1rem;
  text-align: center;
  width: 3rem;
  height: 3rem;
  border: none;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
  opacity: 1;
  &:hover {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
    background: black;
    color: #fff;
  }
`;
