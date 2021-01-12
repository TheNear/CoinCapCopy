import styled from "styled-components/macro";
import { ReactComponent as LogoSVG } from "./assets/img/black.svg";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

// FIXME: Ширина внутренних контейнеров, решить что-то с ними.
export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: stretch;
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
`;

export const LogoLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: stretch;
  width: 10rem;
  padding: 0 1rem;
`;

export const LogoImg = styled(LogoSVG)`
  width: 100%;
`;

export const Main = styled.main``;

// FIXME: Объеденить magrin-top с высотой хедера
// FIXME: Можно ли что-нибудь придумать с padding-bottom?
export const FullStatsContainer = styled.div`
  padding: 0 10% 120px;
  margin-top: 60px;
  background: linear-gradient(to right, rgb(63, 81, 181), rgb(100, 181, 246)) rgb(255, 255, 255);
`;

export const FullStatsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1rem 0;
  color: white;
  font-family: "Lato", sans-serif;
  text-transform: uppercase;
`;

export const FullStatsItem = styled.li`
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  white-space: nowrap;

  @media (max-width: 983px) {
    width: 33%;
  }
`;

export const FullStatsTitle = styled.h5`
  font-weight: 700;
  font-size: 1.4rem;
`;

export const FullStatsValue = styled.p`
  font-weight: 400;
  font-size: 2.1rem;
`;

// FIXME: Отрицательный маргин, можно ли избежать?
export const RatesContainer = styled.div`
  margin-top: -120px;
  padding: 1rem 9%;
`;

export const RatesTable = styled.table`
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

export const RatesTableHead = styled.thead`
  vertical-align: middle;
  font-size: 1.3rem;
  font-weight: 500;
`;

export interface TableAlignProps {
  align?: "left" | "center" | "right";
}

export const RatesTableHeadRow = styled.tr<TableAlignProps>`
  font-weight: inherit;
  text-align: ${({ align }) => align || "inherit"};
  white-space: nowrap;
  cursor: pointer;
`;

// FIXME: ховер цвет тоже в константу наверное
export const RatesTableRow = styled(RatesTableHeadRow)`
  &:hover {
    background-color: #eaeaea;
  }
`;

export interface RatesTabelCellHeadProp extends TableAlignProps {
  active?: boolean;
}

export const RatesTableCellHead = styled.th<RatesTabelCellHeadProp>`
  color: ${({ active }) => (active ? "inherit" : "#686868")};
  font-weight: inherit;
  padding: 1.1rem 0.9rem;
  text-align: ${({ align }) => align || "inherit"};

  &:hover {
    color: #242424;
  }
`;

export const RatesTableCell = styled.td<TableAlignProps>`
  border-top: 1px solid rgba(34, 36, 38, 0.1);
  font-weight: inherit;
  vertical-align: middle;
  padding: 1.1rem 0.9rem;
  text-align: ${({ align }) => align || "inherit"};
`;

export const RatesTableBody = styled.tbody``;

export const RatesCurrencyImg = styled.img`
  display: inline-block;
  vertical-align: middle;
  width: 30px;
  height: 30px;
  margin-right: 5px;
`;

export const RatesCurrencyName = styled.a`
  vertical-align: middle;
  font-size: 1.4rem;
  display: inline-block;
`;

// FIXME: С цветами надо что-то решить добавить потом inactive color
export const RatesCurrencyShort = styled.span`
  color: #686868;
  font-size: 1.1rem;
  display: block;
`;
