import { useEffect, useState } from "react";

type CurrencyRates = Record<string, number>;

function useCurrencyInfo(currency: string): CurrencyRates {
  const [data, setData] = useState<CurrencyRates>({});

  const api = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;
  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
  }, [currency]);
  console.log("hello", data);
  return data;
}
export default useCurrencyInfo;
