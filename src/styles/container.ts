import styled, { css } from "styled-components/macro";
import { device } from "./breakpoints";

export const containerPadding = css`
  padding-left: 9%;
  padding-right: 9%;

  @media ${device.laptop} {
    padding-left: 1%;
    padding-right: 1%;
  }

  @media ${device.tabletS} {
    padding-left: 0%;
    padding-right: 0%;
  }
`;

export const SmallHidden = styled.span`
  @media ${device.tabletS} {
    display: none;
  }
`;
