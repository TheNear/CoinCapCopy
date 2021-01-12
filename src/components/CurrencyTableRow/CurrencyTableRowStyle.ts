import styled from "styled-components/macro";
import { laptopHidden, tabletHidden } from "../../styles/media";
import { ResponseHidden } from "../../types/responseTypes";

interface TableAlignProps {
  align?: "left" | "center" | "right";
}

export const CurrencyTableRowWrap = styled.tr<TableAlignProps>`
  font-weight: inherit;
  text-align: ${({ align }) => align || "inherit"};
  white-space: nowrap;
  cursor: pointer;
  transition: background-color 0.4s ease;

  &:hover {
    background-color: #eaeaea;
  }
`;

type CurrencyTableCellProps = {
  positive?: "up" | "down";
} & TableAlignProps & ResponseHidden;

export const CurrencyTableCell = styled.td<CurrencyTableCellProps>`
  border-top: 1px solid rgba(34, 36, 38, 0.1);
  font-weight: inherit;
  vertical-align: middle;
  padding: 1.1rem 0.9rem;
  text-align: ${({ align }) => align || "inherit"};
  color: ${({ positive }) => {
    switch (positive) {
      case "up":
        return "rgb(24, 198, 131)";
      case "down":
        return "rgb(244, 67, 54)";
      default:
        return "inherit";
    }
  }};

  ${({ tabletHide }) => tabletHide && tabletHidden};
  ${({ laptopHide }) => laptopHide && laptopHidden};
`;

export const CurrencyCurrencyImg = styled.img`
  display: inline-block;
  vertical-align: middle;
  width: 30px;
  height: 30px;
  margin-right: 5px;
`;

export const CurrencyCurrencyName = styled.a`
  vertical-align: middle;
  font-size: 1.4rem;
  display: inline-block;
`;

// FIXME: С цветами надо что-то решить добавить потом inactive color
export const CurrencyCurrencyShort = styled.span`
  color: #686868;
  font-size: 1.1rem;
  display: block;
`;
