import styled from "styled-components"
import { VscAccount, VscOrganization } from "react-icons/vsc";

export const RegisterContainer = styled.div`
  border-radius: 10px;
  height: 550px;
  margin: 5% auto;
  margin-top: 15rem;
  overflow: hidden;
  width: 1000px;
`

export const RegisterCover = styled.div`
  /* background: ${(props) => props.theme.bgColor}; */
  background: tomato;
  color: ${(props) => props.theme.textColor};
  height: 550px;
  margin: 0 0 0 50%;
  position: relative;
  text-align: center;
  width: 50%;
  z-index: 2;
  transition: all 0.7s;
  & h1 {
    padding-top: 38%;
    font-size: 2rem;
  }
  & p {
    font-weight: 300;
    line-height: 22px;
    padding: 30px 45px 40px;
  }
`

export const RegisterBtn = styled.button`
  cursor: pointer;
  border: 1px solid ${(props) => props.theme.btnColor};
  background: transparent;
  border-radius: 20px;
  color: ${(props) => props.theme.textColor};
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 1px;
  padding: 15px 60px;
  text-decoration: none;
  text-transform: uppercase;
  margin-top: 3rem;
  & h1 {
    padding: 20% 0 25px;
  }
`

export const RegisterIndividual = styled.div`
  background: ${(props) => props.theme.subTextColor};
  color: ${(props) => props.theme.textColor};
  float: left;
  height: 100%;
  position: relative;
  width: 50%;
  text-align: center;
  top: -550px;
  z-index: 1;
  transition: all 0.5s;
  & h1 {
    color: tomato;
    margin-top: 4rem;
    font-size: 2rem;
  }
  & p {
    font-size: 12px;
    font-weight: 300;
    letter-spacing: 0.3px;
    padding: 20px;
  }
`

export const RegisterOrganization = styled.div`
  background: ${(props) => props.theme.subTextColor};
  color: ${(props) => props.theme.textColor};
  float: right;
  height: 100%;
  position: relative;
  width: 50%;
  text-align: center;
  top: -550px;
  z-index: 1;
  transition: all 0.5s;
  & h1 {
    color: tomato;
    margin-top: 4rem;
    font-size: 2rem;
  }
  & p {
    font-size: 12px;
    font-weight: 300;
    letter-spacing: 0.3px;
    padding: 20px;
  }
`

export const OptionProfile = styled(VscAccount)`
  font-size: 10rem;
  margin-top: 2rem;
  color: #4c4c4c;
`

export const OptionOrganization = styled(VscOrganization)`
  font-size: 10rem;
  margin-top: 2rem;
  color: #4c4c4c;
`

export const RegisterFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 1180px;
  margin: 0 auto;
  margin-top: 10vh;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  transition: all 0.5s;
  & h1 {
    font-size: 4rem;
    padding: 2rem;
  }
  & h4 {
    font-size: 2rem;
    padding: 2rem;
    margin-top: 1.5rem;
  }
`