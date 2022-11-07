import styled from "styled-components"
import { FaRegUserCircle } from "react-icons/fa";

export const HeaderContainer = styled.header`
  position: fixed;
  background-color: white;
  top: 0;
  left: 0;
  width: 100%;
  padding: .5rem 0;
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
  margin: 0px 0px 0px 1rem;
  font-size: 2.25rem;
  line-height: inherit;
  font-weight: 500;
  color: black;
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