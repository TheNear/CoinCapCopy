import React from "react";
import { useSelector } from "react-redux";
import {
  CurrencyContainer,
  CurrencyTableBody,
  CurrencyTableCellHead,
  CurrencyTableHead,
  CurrencyTableHeadRow,
  CurrencyTableWrap,
} from "./CurrencyTableStyle";
import { CurrencyTableRow } from "../CurrencyTableRow/CurrencyTableRow";
// import { data } from "../../mocks/data.json";
import { SmallHidden } from "../../styles/container";
import { getCurrencyListPart } from "../../store/currency/selector";
import { TableMoreButton } from "../TableMoreButton/TableMoreButton";

const CurrencyTable: React.FC = () => {
  const currencyList = useSelector(getCurrencyListPart);

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
          {currencyList.map((rowData) => (
            <CurrencyTableRow key={rowData.symbol} data={rowData} />
          ))}
        </CurrencyTableBody>
      </CurrencyTableWrap>
      <TableMoreButton />
    </CurrencyContainer>
  );
};

export { CurrencyTable };
