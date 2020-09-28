import styled from "styled-components";
import { device } from "../../config/mq";

// BookmarkBar
export const BookmarkBarContainer = styled.div`
  max-width: 100%;
  flex-basis: 100%;
  order: 1;
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  margin-left: 16px;
  border-bottom: 1px solid ${(props) => props.theme.lighterNero};

  @media ${device.tablet} {
    max-width: 20%;
    flex-basis: 20%;
    padding: 32px 0 32px 32px;
    margin-left: 16px;
    order: 2;
    display: block;
    overflow-x: initial;
    position: relative;
    border-bottom: none;

    &:after {
      content: "";
      display: block;
      height: calc(100% - 128px);
      width: 1px;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      background-color: ${(props) => props.theme.lighterNero};
    }
  }
`;

export const BookmarkBarContainerLine = styled.div`
  margin-bottom: 12px;
  width: 100vw;
  @media ${device.tablet} {
    width: 100%;
  }
`;

export const BookmarkBarContainerLineItem = styled.div`
  width: 100%;
  height: 1px;
  margin-bottom: 4px;

  ${(props) => {
    switch (props.size) {
      case "thick":
        return `background-color: ${props.theme.venetianRed}; height: 2px;`;
      case "med":
        return `background-color: ${props.theme.lightVenetianRed}`;
      case "thin":
        return `background-color: ${props.theme.lighterVenetianRed}`;
      default:
        return `background-color: ${props.theme.white}`;
    }
  }}
`;

export const BookmarkBarContainerContent = styled.div`
  padding-right: 30px;
  @media ${device.tablet} {
    padding-right: initial;
  }
`;

export const BookmarkBarContainerTitle = styled.div`
  font-size: 20px;
  color: ${(props) => props.theme.venetianRed};
  font-family: ${(props) => props.theme.goudyFont};
  line-height: 1.2;
  margin-bottom: 7px;
`;

export const BookmarkBarContainerDesc = styled.div`
  font-size: 14px;
  color: ${(props) => props.theme.lightNero};
  font-family: ${(props) => props.theme.josefinFont};
  margin-bottom: 17px;

  @media ${device.tablet} {
    padding-right: 30px;
  }
`;

export const BookmarkBarDivider = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${(props) => props.theme.white};

  @media ${device.tablet} {
    background-color: rgba(38, 34, 34, 0.1);
    margin-bottom: 16px;
  }
`;

export const BookmarkBarWrapper = styled.div`
  max-width: 40%;
  flex-basis: 40%;
  margin-right: 16px;
  position: relative;

  &:after {
    content: "";
    right: 0%;
    top: 40%;
    display: block;
    position: absolute;
    height: 60px;
    width: 1px;
    transform: translate(50%, -50%);
    background-color: ${(props) => props.theme.lighterNero};
  }

  @media ${device.tablet} {
    margin-right: 0;
    max-width: 100%;
    flex-basis: 100%;
    &:after {
      display: none;
    }
  }
`;

export const BookmarkBarItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  @media ${device.tablet} {
    flex-direction: column;
    align-items: center;
  }
`;

// BookmarkBarItem

export const BookmarkBarItemContainer = styled.div`
  width: 215px;
  padding-top: 24px;
  margin-right: 40px;

  @media ${device.tablet} {
    width: initial;
    padding-top: initial;
    margin-right: initial;
  }
`;

export const BookmarkBarItemCol = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  cursor: pointer;

  @media ${device.tablet} {
    align-items: center;
  }
`;
export const BookmarkBarItemHeadline = styled.div`
  font-size: 18px;
  font-family: ${(props) => props.theme.goudyFont};
  font-weight: bold;
  line-height: 1.08;
  color: ${(props) => props.theme.nero};
  margin-bottom: 17px;
  padding-right: 20px;

  @media ${device.tablet} {
    font-size: 22px;
    padding-right: initial;
  }
`;
export const BookmarkBarItemButton = styled.button`
  position: relative;
  width: 24px;
  border-radius: 100%;
  height: 24px;
  line-height: 1;
  box-shadow: inset 0.3rem 0.2rem 0 ${(props) => props.theme.white},
    0.375rem 0.375rem 0 ${(props) => props.theme.lightVenetianRed};
  border: solid 0.5px ${(props) => props.theme.venetianRed};
  background-color: ${(props) => props.theme.lighterVenetianRed};
  cursor: pointer;
  transition: box-shadow 0.5s ease-in;

  @media ${device.tablet} {
    margin-right: 5px;
  }

  &:active,
  &:focus {
    outline: none;
  }

  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  &:hover {
    box-shadow: inset 0.3rem 0.2rem 0 #fff,
      0.375rem 0.375rem 0 ${(props) => props.theme.lightVenetianRed};
    transition: box-shadow 0.5s ease-in;
  }

  svg {
    height: 10px;

    path {
      fill: ${(props) => props.theme.venetianRed};
    }
  }
`;
export const BookmarkBarItemAuthor = styled.div`
  color: ${(props) => props.theme.venetianRed};
  font-family: ${(props) => props.theme.goudyFont};
  font-size: 20px;
  font-style: italic;
  line-height: 1.2;
  margin-bottom: 4px;
  max-width: 60%;
  word-break: break-word;

  @media ${device.tablet} {
  }
`;

export const BookmarkBarItemDivider = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${(props) => props.theme.white};
  margin-bottom: 12px;

  @media ${device.tablet} {
    background-color: rgba(38, 34, 34, 0.1);
  }
`;
