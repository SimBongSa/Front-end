import styled from "styled-components"
import { FaRegUserCircle } from "react-icons/fa";

export const HeaderContainer = styled.header`
  position: fixed;
  background-color: white;
  top: 0;
  left: 0;
  width: 100%;
  padding: .5rem 0;
  z-index: 3;
  will-change: transform;
  transition: background .3s,
  -webkit-transform .5s cubic-bezier(.694,.048,.335,1);
  transition: transform .5s cubic-bezier(.694,.048,.335,1), background .3s;
  transition: transform .5s cubic-bezier(.694,.048,.335,1), background .3s,
  -webkit-transform .5s cubic-bezier(.694,.048,.335,1);
  transform: translateY(0);
  -webkit-transform: translateY(0);
`

export const HeaderLogo = styled.span`
  float: left;
  padding: 13px 10px 13px 10px;
  margin: 9px 0px 0px 15px;
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
  background: #232323;
  border-radius: 35px;
  color: #fff;
  padding: 15px;
  font-size: 0.7rem;
  width: 150px;
  margin-left: 1.75rem;
  float: right;
  justify-content: center;
  transition: all 0.3s;
  &:hover {
    transform: translateY(-10%);
  }
  @media ( max-width: 768px) {
    width: 100px;
    font-size: .4rem;
  }
`

export const UserIcon = styled(FaRegUserCircle)`
  display: flex;
  float: right;
  justify-content: right;
  font-size: 3rem;
  color: grey;
  
`

export const LightThemeBtn = styled.button`
  cursor: pointer;
  position: fixed;
  bottom: 20px;
  left: 200px;
  border-radius: 50%;
  background: ${(props) => props.theme.WHITE};
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
  background: black;
  color: #fff
  }
`