import React from "react";
import { CurrencyData } from "../../types/apiResponses";
import {
  CurrencyCurrencyImg,
  CurrencyCurrencyName,
  CurrencyCurrencyShort,
  CurrencyTableCell,
  CurrencyTableRowWrap,
} from "./CurrencyTableRowStyle";
import { getParsedData } from "../../helpers/currencyParser";

export interface CurrencyTableRowProp {
  data: CurrencyData;
}

const CurrencyTableRow: React.FC<CurrencyTableRowProp> = ({ data }) => {
  const {
    icon,
    marketCap,
    name,
    percent,
    positive,
    price,
    rank,
    shortName,
    supply,
    volume24h,
    vwap24h,
  } = getParsedData(data);

  return (
    <CurrencyTableRowWrap>
      <CurrencyTableCell align="center" mobileHideL>{rank}</CurrencyTableCell>
      <CurrencyTableCell align="left">
        <CurrencyCurrencyImg src={icon} />
        <CurrencyCurrencyName>
          {name}
          <CurrencyCurrencyShort>{shortName}</CurrencyCurrencyShort>
        </CurrencyCurrencyName>
      </CurrencyTableCell>
      <CurrencyTableCell>{price}</CurrencyTableCell>
      <CurrencyTableCell tabletHide>{marketCap}</CurrencyTableCell>
      <CurrencyTableCell laptopHide>{vwap24h}</CurrencyTableCell>
      <CurrencyTableCell laptopHide>{supply}</CurrencyTableCell>
      <CurrencyTableCell tabletHide>{volume24h}</CurrencyTableCell>
      <CurrencyTableCell positive={positive}>{percent}</CurrencyTableCell>
    </CurrencyTableRowWrap>
  );
};

export { CurrencyTableRow };
