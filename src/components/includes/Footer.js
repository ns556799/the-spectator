import React from "react";
import {
  FooterContainer,
  FooterContainerText,
  FooterContainerLink,
} from "./IncludesComponentStyles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContainerText>
        Built by{" "}
        <FooterContainerLink href='https://www.linkedin.com/in/niv-suresh-8a1ba599/'>
          Niv Suresh
        </FooterContainerLink>
      </FooterContainerText>
    </FooterContainer>
  );
};

export default Footer;
