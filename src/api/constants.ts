export const BASE_URL = "https://api.coincap.io/v2";

export const URLS = {
  BASE: "https://api.coincap.io/v2",
  CURRENCY: "/assets",
} as const;

export type URLSType = typeof URLS;
