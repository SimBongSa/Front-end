import styled from "styled-components"
import { VscAccount, VscOrganization } from "react-icons/vsc";

export const RegisterContainer = styled.div`
  border-radius: 10px;
  height: 550px;
  margin: 5% auto;
  margin-top: 15rem;
  overflow: hidden;
  width: 1000px;
  box-shadow: 0rem 0rem 1.5rem rgba(0,0,0,0.2), 0rem 0rem .2rem rgba(0,0,0,0.2);
`

export const RegisterCover = styled.div`
  background: ${(props) => props.theme.subBgColor};
  color: #232323;
  height: 550px;
  margin: 0 0 0 50%;
  position: relative;
  text-align: center;
  width: 50%;
  z-index: 3;
  transition: all 0.7s;
  & h1 {
    padding-top: 50%;
    font-size: 2rem;
    cursor: pointer;
    color: ${(props) => props.theme.textColor};
  }
  & p {
    font-weight: 300;
    line-height: 22px;
    padding: 30px 45px 40px;
  }
`

export const RegisterBtn = styled.button`
  cursor: pointer;
  border: 2px solid ${(props) => props.theme.textColor};
  background: transparent;
  border-radius: 20px;
  color: ${(props) => props.theme.textColor};
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 1px;
  padding: 15px 50px;
  text-decoration: none;
  text-transform: uppercase;
  margin-top: 3rem;
  & h1 {
    padding: 20% 0 25px;
  }
`

export const RegisterIndividual = styled.div`
  background: ${(props) => props.theme.subBtnColor};
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
  background: ${(props) => props.theme.subBtnColor};
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
  color: ${(props) => props.theme.textColor};
`

export const OptionOrganization = styled(VscOrganization)`
  font-size: 10rem;
  margin-top: 2rem;
  color: ${(props) => props.theme.textColor};
`

export const StRegisterForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
  width: 100%;
  background: ${(props) => props.theme.bgColor};
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

export const StInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: .1rem;
  position: relative;
  align-items: center;
  overflow: hidden;
  width: 80%;
  margin-bottom: 10rem;
`

export const InputHeader = styled.h1`
  height: 5rem;
  text-align: center;
  font-size: 2rem;
`

export const StRegBtn = styled.button`
	cursor: pointer;
  position: relative;
  margin-left: -12px;
	width: 100%;
	height: 3rem;
	border-radius: 24px;
	margin-top: 3rem;
	margin-bottom: 5rem;
	background: ${props => props.theme.btnColor};
	border: 1px solid ${props => props.theme.btnColor};
	color: ${props => props.theme.bgColor};
`