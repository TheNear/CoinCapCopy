import styled from "styled-components";

// FIXME: Отрицательный маргин, можно ли избежать?
export const CurrencyContainer = styled.div`
  margin-top: -120px;
  padding: 1rem 9%;
`;

export const CurrencyTableWrap = styled.table`
  width: 100%;
  overflow: hidden;
  background-color: white;
  border: none;
  border-radius: 0.4rem;
  border-collapse: separate;
  border-spacing: 0;
  text-align: right;
  font-size: 1.4rem;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 15px -3px;
`;

export const CurrencyTableHead = styled.thead`
  vertical-align: middle;
  font-size: 1.3rem;
  font-weight: 500;
`;

interface TableAlignProps {
  align?: "left" | "center" | "right";
}

export const CurrencyTableHeadRow = styled.tr<TableAlignProps>`
  font-weight: inherit;
  text-align: ${({ align }) => align || "inherit"};
  white-space: nowrap;
  cursor: pointer;
`;

export interface CurrencyTabelCellHeadProp extends TableAlignProps {
  active?: boolean;
}

export const CurrencyTableCellHead = styled.th<CurrencyTabelCellHeadProp>`
  color: ${({ active }) => (active ? "inherit" : "#686868")};
  font-weight: inherit;
  padding: 1.1rem 0.9rem;
  text-align: ${({ align }) => align || "inherit"};

  &:hover {
    color: #242424;
  }
`;

export const CurrencyTableBody = styled.tbody``;
