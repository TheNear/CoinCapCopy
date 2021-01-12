import React from "react";
import {
  AppContainer,
  FullStatsContainer,
  FullStatsItem,
  FullStatsList,
  FullStatsTitle,
  FullStatsValue,
  Header,
  LogoImg,
  LogoLink,
  Main,
  RatesContainer,
  RatesTable,
  RatesTableBody,
  RatesTableCell,
  RatesTableHead,
  RatesTableRow,
  RatesTableHeadRow,
  RatesTableCellHead,
  RatesCurrencyImg,
  RatesCurrencyName,
  RatesCurrencyShort,
} from "./AppStyle";
import btcImg from "./assets/img/coin/btc.png";

const App: React.FC = () => {
  return (
    <AppContainer>
      <Header>
        <LogoLink href="/">
          <LogoImg />
        </LogoLink>
      </Header>
      <Main>
        <FullStatsContainer>
          <FullStatsList>
            <FullStatsItem>
              <FullStatsTitle>Market Cap</FullStatsTitle>
              <FullStatsValue>$893.01b</FullStatsValue>
            </FullStatsItem>
            <FullStatsItem>
              <FullStatsTitle>EXCHANGE VOL</FullStatsTitle>
              <FullStatsValue>$140.63B</FullStatsValue>
            </FullStatsItem>
            <FullStatsItem>
              <FullStatsTitle>ASSETS</FullStatsTitle>
              <FullStatsValue>1,656</FullStatsValue>
            </FullStatsItem>
            <FullStatsItem>
              <FullStatsTitle>EXCHANGES</FullStatsTitle>
              <FullStatsValue>74</FullStatsValue>
            </FullStatsItem>
            <FullStatsItem>
              <FullStatsTitle>MARKETS</FullStatsTitle>
              <FullStatsValue>6,856</FullStatsValue>
            </FullStatsItem>
            <FullStatsItem>
              <FullStatsTitle>BTC DOM INDEX</FullStatsTitle>
              <FullStatsValue>68.7%</FullStatsValue>
            </FullStatsItem>
          </FullStatsList>
        </FullStatsContainer>
        <RatesContainer>
          <RatesTable>
            <RatesTableHead>
              <RatesTableHeadRow>
                <RatesTableCellHead align="center" active>
                  Rank
                </RatesTableCellHead>
                <RatesTableCellHead align="left">
                  Name
                </RatesTableCellHead>
                <RatesTableCellHead>Price</RatesTableCellHead>
                <RatesTableCellHead>Market Cap</RatesTableCellHead>
                <RatesTableCellHead>VWAP (24hr)</RatesTableCellHead>
                <RatesTableCellHead>Supply</RatesTableCellHead>
                <RatesTableCellHead>Volume (24hr)</RatesTableCellHead>
                <RatesTableCellHead>Change (24hr)</RatesTableCellHead>

              </RatesTableHeadRow>
            </RatesTableHead>
            <RatesTableBody>
              <RatesTableRow>
                <RatesTableCell align="center">
                  1
                </RatesTableCell>
                <RatesTableCell align="left">
                  <RatesCurrencyImg src={btcImg} />
                  <RatesCurrencyName>
                    Bitcoin
                    <RatesCurrencyShort>
                      BTC
                    </RatesCurrencyShort>
                  </RatesCurrencyName>
                </RatesTableCell>
                <RatesTableCell>$31,849.19</RatesTableCell>
                <RatesTableCell>$593.02b</RatesTableCell>
                <RatesTableCell>$34,418.48</RatesTableCell>
                <RatesTableCell>18.59m</RatesTableCell>
                <RatesTableCell>$41.07b</RatesTableCell>
                <RatesTableCell>-12.67%</RatesTableCell>
              </RatesTableRow>
            </RatesTableBody>
          </RatesTable>
        </RatesContainer>
      </Main>
    </AppContainer>
  );
};

export { App };
