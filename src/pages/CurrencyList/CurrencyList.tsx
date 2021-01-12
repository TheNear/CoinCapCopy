import React from "react";
import { CurrencyTable } from "../../components/CurrencyTable/CurrencyTable";
import { FullStats } from "../../components/FullStats/FullStats";
import { data } from "../../mocks/fullstat.json";

const CurrencyList: React.FC = () => {
  return (
    <>
      <FullStats data={data} />
      <CurrencyTable />
    </>
  );
};

export { CurrencyList };
