import React from "react";
import {
  CurrencyContainer,
  CurrencyTableBody,
  CurrencyTableCellHead,
  CurrencyTableHead,
  CurrencyTableHeadRow,
  CurrencyTableWrap,
} from "./CurrencyTableStyle";
import { CurrencyTableRow } from "../CurrencyTableRow/CurrencyTableRow";
import { data } from "../../mocks/data.json";
import { SmallHidden } from "../../styles/container";

const CurrencyTable: React.FC = () => {
  return (
    <CurrencyContainer>
      <CurrencyTableWrap>
        <CurrencyTableHead>
          <CurrencyTableHeadRow>
            <CurrencyTableCellHead align="center" active mobileHideL>
              Rank
            </CurrencyTableCellHead>
            <CurrencyTableCellHead align="left">Name</CurrencyTableCellHead>
            <CurrencyTableCellHead>Price</CurrencyTableCellHead>
            <CurrencyTableCellHead tabletHide>Market Cap</CurrencyTableCellHead>
            <CurrencyTableCellHead laptopHide>VWAP (24hr)</CurrencyTableCellHead>
            <CurrencyTableCellHead laptopHide>Supply</CurrencyTableCellHead>
            <CurrencyTableCellHead tabletHide>Volume (24hr)</CurrencyTableCellHead>
            <CurrencyTableCellHead>
              <SmallHidden>Change</SmallHidden>
              (24hr)
            </CurrencyTableCellHead>
          </CurrencyTableHeadRow>
        </CurrencyTableHead>
        <CurrencyTableBody>
          {data.map((rowData) => (
            <CurrencyTableRow key={rowData.symbol} data={rowData} />
          ))}
        </CurrencyTableBody>
      </CurrencyTableWrap>
    </CurrencyContainer>
  );
};

export { CurrencyTable };
