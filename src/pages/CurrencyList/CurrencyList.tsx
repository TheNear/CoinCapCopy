import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { CurrencyTable } from "../../components/CurrencyTable/CurrencyTable";
import { FullStats } from "../../components/FullStats/FullStats";
import { data } from "../../mocks/fullstat.json";
import { fetchCurrencyData } from "../../store/currency/action";

// FIXME: оптимизировать, будет много перерисовок с dispatch здесь
const CurrencyList: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrencyData());
    /*
    const ws = new WebSocket("wss://ws.coincap.io/prices?assets=ALL");
    ws.onopen = () => {
      console.log("WS OPEN");
    };

    ws.onmessage = (evt) => {
      const message = JSON.parse(evt.data);
      console.log(message);
    };

    ws.onclose = () => {
      console.log("WS CLOSE");
    };

    ws.close();
    */
  }, [dispatch]);

  return (
    <>
      <FullStats data={data} />
      <CurrencyTable />
    </>
  );
};

export { CurrencyList };
