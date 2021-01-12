export const parseCurrency = (value: string): string => {
  const num = parseFloat(value);
  if (Number.isNaN(num)) return "-";
  if (num > 999999 && num < 999999999) return `$${(num / 1000000).toFixed(2)}m`;
  if (num > 999999999 && num < 999999999999) return `$${(num / 1000000000).toFixed(2)}b`;
  if (num < 1) return `$${num.toFixed(8)}`;
  if (num > 1) return `$${num.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  return `$${num}`;
};
