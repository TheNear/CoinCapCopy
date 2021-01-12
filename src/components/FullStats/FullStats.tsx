import React from "react";
import { ParsedFullStats } from "../../types/parsedDataTypes";
import { FullStatsItem } from "../FullStatsItem/FullStatsItem";
import { FullStatsContainer, FullStatsList } from "./FullStatsStyle";

export interface FullStatsProp {
  data: ParsedFullStats;
}

const FullStats: React.FC<FullStatsProp> = ({ data }) => {
  return (
    <FullStatsContainer>
      <FullStatsList>
        {data.map((item) => (
          <FullStatsItem key={item.title} title={item.title} value={item.value} />
        ))}
      </FullStatsList>
    </FullStatsContainer>
  );
};

export { FullStats };
