import React from "react";
import {
  AppContainer,
  Main,
} from "./AppStyle";
import { Header } from "./components/Header/Header";
import { CurrencyList } from "./pages/CurrencyList/CurrencyList";

const App: React.FC = () => {
  return (
    <AppContainer>
      <Header />
      <Main>
        <CurrencyList />
      </Main>
    </AppContainer>
  );
};

export { App };
