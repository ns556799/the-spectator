import styled from "styled-components";
import { device } from "../../config/mq";

// Header
export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 56px 0;

  background-color: ${(props) => props.theme.white};

  @media ${device.tablet} {
    margin-bottom: 32px;
    box-shadow: inset 0 -0.5px 0 0 ${(props) => props.theme.whiteSmoke};
  }

  svg {
    max-width: 247px;
    width: 100%;

    path {
      fill: ${(props) => props.theme.venetianRed};
    }
  }
`;

// Footer

export const FooterContainer = styled.div``;
export const FooterContainerText = styled.div`
  text-align: center;
  margin: 30px 0;
  font-family: ${(props) => props.theme.josefinFont};
  font-size: 20px;
`;

export const FooterContainerLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.venetianRed};
`;

// Pagination
export const PaginationNav = styled.nav``;
export const PaginationNavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PaginationNavListItem = styled.li`
  font-size: 20px;
  padding: 10px;
  border: 2px solid ${(props) => props.theme.borderNero};
  background-color: ${(props) => props.theme.lightVenetianRed};
  font-family: ${(props) => props.theme.josefinFont};
  cursor: pointer;
  margin-right: 2px;

  ${(props) => {
    if (props.active) {
      return `
        padding: 12px;
        background-color: ${props.theme.venetianRed};
        border: 2px solid ${props.theme.borderNero};

        a {
          color: ${props.theme.whiteSmoke};
        }

        &:hover {
          box-shadow: none;
        }
      `;
    }
  }};
`;
export const PaginationNavListItemLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.nero};
`;
