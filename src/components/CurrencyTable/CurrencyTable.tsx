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

const CurrencyTable: React.FC = () => {
  return (
    <CurrencyContainer>
      <CurrencyTableWrap>
        <CurrencyTableHead>
          <CurrencyTableHeadRow>
            <CurrencyTableCellHead align="center" active>
              Rank
            </CurrencyTableCellHead>
            <CurrencyTableCellHead align="left">Name</CurrencyTableCellHead>
            <CurrencyTableCellHead>Price</CurrencyTableCellHead>
            <CurrencyTableCellHead>Market Cap</CurrencyTableCellHead>
            <CurrencyTableCellHead>VWAP (24hr)</CurrencyTableCellHead>
            <CurrencyTableCellHead>Supply</CurrencyTableCellHead>
            <CurrencyTableCellHead>Volume (24hr)</CurrencyTableCellHead>
            <CurrencyTableCellHead>Change (24hr)</CurrencyTableCellHead>
          </CurrencyTableHeadRow>
        </CurrencyTableHead>
        <CurrencyTableBody>
          {
            data.map((rowData) => (
              <CurrencyTableRow data={rowData} />
            ))
          }
        </CurrencyTableBody>
      </CurrencyTableWrap>
    </CurrencyContainer>
  );
};

export { CurrencyTable };
