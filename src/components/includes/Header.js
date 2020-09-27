import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../assets/logo.svg";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 56px 0;
  margin-bottom: 32px;

  svg {
    max-width: 247px;
    width: 100%;

    path {
      fill: ${(props) => props.theme.venetianRed};
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
    </HeaderContainer>
  );
};

export default Header;
