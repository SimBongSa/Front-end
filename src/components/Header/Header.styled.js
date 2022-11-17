import styled from "styled-components"
import { FaRegUserCircle } from "react-icons/fa";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: .5rem 0;
  z-index: 3;
  background-color: ${(props) => props.theme.bgColor};
  will-change: transform;
  transition: all 0.5s;
  @media ( max-width: 768px) {
    width: 100%;
    overflow: hidden;
  }
`

export const HeaderLogo = styled.span`
  cursor: pointer;
  float: left;
  padding: 13px 10px 13px 10px;
  margin: 13px 0px 0px 15px;
  font-size: 2.25rem;
  line-height: inherit;
  font-weight: 500;
  &::after {
    content: '';
    display: table;
    clear: both;
  }
`

export const HeaderMenu = styled.div`
  display: inline;
  float: right;
  font-size: 1rem;
  margin: 1rem;
`

export const HeaderMenuItem = styled.span`
  cursor: pointer;
  display: inline-block;
  justify-content: center;
  margin-top: 4px;
  padding: 13px 10px 13px 10px;
  text-decoration: none;
  transition: all 0.3s;
  &:hover {
    transform: translateY(-10%);
  }
`

export const HeaderRegister = styled.div`
  cursor: pointer;
  display: flex;
  border-radius: 30px;
  background: ${(props) => props.theme.ctrColor};
  color: ${(props) => props.theme.bgColor};
  padding: 15px;
  width: fit-content;
  margin-left: 50px;
  padding: 16px 25px 15px 25px;
  float: right;
  justify-content: center;
  text-align: center;
  align-items: center;
  user-select: none;
  transition: all 0.3s;
  &:hover {
    transform: translateY(-10%);
  }
`

export const UserIcon = styled(FaRegUserCircle)`
  cursor: pointer;
  display: flex;
  float: right;
  justify-content: right;
  font-size: 3rem;
  color: grey;
  margin-left: 1rem;
  transition: all 0.5s;
  &:hover {
    transform: translateY(-10%);
  }
`

export const LightThemeBtn = styled.button`
  cursor: pointer;
  position: fixed;
  bottom: 25px;
  left: 200px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.ctrColor};
  color: ${(props) => props.theme.bgColor};
  padding: 1rem;
  text-align: center;
  width: 3rem;
  height: 3rem;
  border: none;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: all 0.7s;
  -moz-transition: all 0.7s;
  -o-transition: all 0.7s;
  transition: all 0.7s;
  opacity: 1;
  &:hover {
  -webkit-transform: rotate(360deg);
  -moz-transform: rotate(360deg);
  -o-transform: rotate(360deg);
  transform: rotate(360deg);
  }
  @media ( max-width: 768px) {
    position: fixed;
    top: 25px;
  }
`

export const AdminBtn = styled.button`
  cursor: pointer;
  display: inline-block;
  border-radius: 30px;
  background: ${(props) => props.theme.ctrColor};
  color: ${(props) => props.theme.bgColor};
  width: fit-content;
  padding: 16px 25px 15px 25px;
  justify-content: center;
  text-align: center;
  align-items: center;
  user-select: none;
  border: none;
  justify-content: center;
  margin-top: 4px;
  margin-right: 1rem;
  text-decoration: none;
  transition: all 0.3s;
  transition: all 0.3s;
`