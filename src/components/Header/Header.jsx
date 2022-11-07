import { HeaderContainer, HeaderLogo, HeaderMenu, HeaderMenuItem, HeaderRegister } from "./Header.styled";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLogo>VONGOLE</HeaderLogo>

      <HeaderMenu>
        <HeaderMenuItem>Notice</HeaderMenuItem>
        <HeaderMenuItem>Message</HeaderMenuItem>
        <HeaderRegister>Register Organization</HeaderRegister>
      </HeaderMenu>

    </HeaderContainer>
  )
};

export default Header;