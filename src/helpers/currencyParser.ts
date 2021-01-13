import { CurrencyData } from "../api/types";
import { getCoinIcon } from "./coinIconMap";

// FIXME: Мы не всегда возвращаем валюту, знак валюты не нужен, + мы должны уметь указывать валюту
export const getParsedCurrency = (value?: string | null): string => {
  if (!value) return "-";
  const num = parseFloat(value);
  if (Number.isNaN(num)) return "-";
  if (num > 999999 && num < 999999999) return `$${(num / 1000000).toFixed(2)}m`;
  if (num > 999999999 && num < 999999999999) return `$${(num / 1000000000).toFixed(2)}b`;
  if (num < 1) return `$${num.toFixed(8)}`;
  if (num > 1) return `$${num.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  return `$${num}`;
};

interface ParsedPercentReturn {
  percent: string;
  positive?: "up" | "down";
}

export const getParsedPercent = (percent?: string | null): ParsedPercentReturn => {
  if (!percent) {
    return {
      percent: "-",
    };
  }
  const parsedPercent = parseFloat(percent);
  return {
    percent: `${parsedPercent.toFixed(2)}%`,
    positive: parsedPercent > 0 ? "up" : "down",
  };
};

interface GetParsedDataReturn {
  rank: string;
  icon: string;
  name: string;
  shortName: string;
  price: string;
  marketCap: string;
  vwap24h: string;
  supply: string;
  volume24h: string;
  percent: string;
  positive?: "up" | "down";
}

export const getParsedData = (data: CurrencyData): GetParsedDataReturn => {
  const percentData = getParsedPercent(data.changePercent24Hr);
  return {
    rank: data.rank,
    icon: getCoinIcon(data.symbol),
    name: data.name,
    shortName: data.symbol,
    price: getParsedCurrency(data.priceUsd),
    marketCap: getParsedCurrency(data.marketCapUsd),
    vwap24h: getParsedCurrency(data.vwap24Hr),
    supply: getParsedCurrency(data.supply),
    volume24h: getParsedCurrency(data.volumeUsd24Hr),
    percent: percentData.percent,
    positive: percentData.positive,
  };
};
