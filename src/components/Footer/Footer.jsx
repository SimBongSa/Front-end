import { FooterContainer } from "./Footer.styled";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterUl>
        <li><h4>Vongole</h4></li>
        <FooterItem>FE: 김성호, 김경일, 장석원</FooterItem>
        <FooterItem>BE: 김원재, 강진구, 강창식, 김성민</FooterItem>
        <FooterItem>DESIGN: 전혜진</FooterItem>
        <FooterItem>https://github.com/SimBongSa</FooterItem>
      </FooterUl>

      <FooterUl>
        <li><h4>이용 안내</h4></li>
        <FooterItem>이용약관</FooterItem>
        <FooterItem>개인정보처리방침</FooterItem>
      </FooterUl>

      <FooterUl>
        <li><h4>고객지원</h4></li>
        <FooterItem>이용 가이드</FooterItem>
        <FooterItem>FAQ</FooterItem>
      </FooterUl>

      <FooterBottom>
      </FooterBottom>

    </FooterContainer>
  )
};

export default Footer;

export const FooterUl = styled.ul`
  width: 33.333%;
  & li {
    /* text-align: center; */
    padding-bottom: 10px;
    & h4 {
      transition: all 0.5s;
      padding: 10px 0 5px 0;
      color: #fff;
      font-size: 2vw;
    }
  }
`

export const FooterItem = styled.li`
  cursor: pointer;
  width: fit-content;
  font-size: 1vw;
  color: #8DB9ED;
  transition: all 0.5s;
  &:hover {
    color: #ccc
  }
`

export const FooterBottom = styled.section`
  width: 100%;
  padding: 1rem;
  border-top: 1px solid #ccc;
  margin-top: 10px;
  font-size: 1vw;
`