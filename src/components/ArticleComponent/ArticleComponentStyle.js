import styled from "styled-components";
import { device } from "../../config/mq";

// App
export const ArticleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media ${device.tablet} {
    flex-direction: row;
    padding-left: 10px;
    padding-right: 10px;
    box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;
    min-width: 240px;
    max-width: 1220px;
    position: relative;
    padding-left: 16px;
    padding-right: 16px;
    zoom: 1;
  }
`;

// Articles
export const ArticlesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 100%;
  flex-basis: 100%;
  padding: 16px;
  order: 2;

  @media ${device.tablet} {
    max-width: 80%;
    flex-basis: 80%;
    padding: 32px 0;
    order: 1;
  }
`;

// ArticleItem
export const ArticleItemContainer = styled.div`
  max-width: 100%;
  flex-basis: 100%;

  @media ${device.tablet} {
    max-width: calc(100% / 2 - 32px);
    flex-basis: calc(100% / 2 - 32px);
    margin: 0 16px;
  }

  @media ${device.laptop} {
    max-width: calc(100% / 3 - 32px);
    flex-basis: calc(100% / 3 - 32px);
    margin: 0 16px;
  }
`;
export const ArticleItemAuthor = styled.div`
  color: ${(props) => props.theme.venetianRed};
  font-family: ${(props) => props.theme.goudyFont};
  font-size: 20px;
  font-style: italic;
  line-height: 1.2;
  margin-bottom: 4px;
`;
export const ArticleItemHeadline = styled.div`
  font-size: 26px;
  font-family: ${(props) => props.theme.goudyFont};
  font-weight: bold;
  line-height: 1.08;
  color: ${(props) => props.theme.nero};
  margin-bottom: 28px;

  @media ${device.tablet} {
    min-height: 160px;
  }
`;
export const ArticleItemButton = styled.button`
  margin-bottom: 37px;
  color: ${(props) => props.theme.venetianRed};
  text-transform: uppercase;
  background-color: ${(props) => props.theme.lighterVenetianRed};
  position: relative;
  font-weight: 600;
  font-size: 12px;
  font-family: ${(props) => props.theme.josefinFont};
  border-radius: 20px;
  padding: 10px 50px 6px 30px;
  border: 2px solid ${(props) => props.theme.venetianRed};
  line-height: 1;
  cursor: pointer;
  box-shadow: inset 0.3rem 0.2rem 0 #fff,
    0.375rem 0.375rem 0 ${(props) => props.theme.lighterVenetianRed};
  transition: box-shadow 0.5s ease-in;

  @media ${device.tablet} {
    font-size: 16px;
    padding: 6px 50px 6px 30px;
  }

  &:active,
  &:focus {
    outline: none;
  }

  &:after {
    position: absolute;
    content: "";
    display: block;
    height: 100%;
    width: 100%;
    background-color: transparent;
    top: 0;
    left: 0;
  }

  &:hover {
    box-shadow: inset 0.3rem 0.2rem 0 #fff,
      0.375rem 0.375rem 0 ${(props) => props.theme.lightVenetianRed};
    transition: box-shadow 0.5s ease-in;
  }

  ${(props) => {
    if (props.disabled) {
      return `
        color: ${props.theme.lightNero};
        box-shadow: none;
        background-color: ${props.theme.lightestNero};
        border: 2px solid ${props.theme.borderNero};
        cursor: not-allowed;
        &:hover {
          box-shadow: none;
        }
      `;
    }
  }}
`;

export const ArticleItemButtonContent = styled.span`
  position: relative;
  margin-right: 10px;
  svg {
    max-width: 15px;
    position: absolute;
    top: 50%;
    right: -20px;
    transform: translate(5px, -55%);
  }
  &:before {
    display: block;
  }
`;

export const ArticleItemImageWrapper = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 16px;

  &:after {
    content: "";
    display: block;
    padding-bottom: 56%;
  }

  [role="button"] {
    position: absolute;
    z-index: 1;
  }
`;
export const ArticleItemImage = styled.img`
  width: 100%;
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  object-fit: cover;
  object-position: center center;
  z-index: 2;
`;

export const ArticleItemDivider = styled.div`
  width: 100%;
  display: block;
  height: 1px;
  background-color: ${(props) => props.theme.lighterNero};
  margin-bottom: 16px;
`;
