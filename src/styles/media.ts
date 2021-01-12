import { css } from "styled-components/macro";
import { device } from "./breakpoints";

export const tabletHidden = css`
  @media ${device.tablet} {
    display: none;
  }
`;

export const laptopHidden = css`
  @media ${device.laptop} {
    display: none;
  }
`;
