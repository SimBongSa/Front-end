import { FooterContainer, FooterUl, FooterItem } from "./Footer.styled";

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
        <li><h4>봉사자를 찾고 계신가요?</h4></li>
      </FooterUl>

    </FooterContainer>
  )
};

export default Footer;