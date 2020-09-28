import React from "react";
import { HeaderContainer } from "./IncludesComponentStyles";
import { ReactComponent as Logo } from "../assets/logo.svg";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
    </HeaderContainer>
  );
};

export default Header;
