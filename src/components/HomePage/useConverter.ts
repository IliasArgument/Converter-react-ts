import { useState, useEffect } from "react";
import { ICurrencies } from "../../shared/types";

const useConverter = () => {
  const [amount1, setAmount1] = useState<number>(1);
  const [amount2, setAmount2] = useState<number>(1);
  const [currency1, setCurrency1] = useState<any>("USD");
  const [currency2, setCurrency2] = useState<any>("EUR");
  const [rates, setRates] = useState<ICurrencies | any>([]);

  const [usd, setUsd] = useState("");
  const [eur, setEur] = useState("");

  useEffect(() => {
    fetch(
      `https://api.apilayer.com/exchangerates_data/latest?symbols=${"UAH"}&base=${"USD"}`,
      {
        headers: {
          apikey: "XnmAibTdalIm77ZmFg7mo7IAok9owug1",
        },
      }
    )
      .then((response) => response.json())
      .then((result) => {
        if (result) {
          let data = result?.rates;
          setUsd(data.UAH);
        }
      })
      .catch((error) => {
        console.error("error", error);
      });
  }, []);

  useEffect(() => {
    fetch(
      `https://api.apilayer.com/exchangerates_data/latest?symbols=${""}&base=${""}`,
      {
        headers: {
          apikey: "XnmAibTdalIm77ZmFg7mo7IAok9owug1",
        },
      }
    )
      .then((response) => response.json())
      .then((result) => {
        if (result) {
          let data = result?.rates;
          let currencies = {
            USD: data.USD,
            UAH: data.UAH,
            EUR: data.EUR,
          };
          setRates(currencies);
          setEur(data.UAH);
        }
      })
      .catch((error) => {
        console.error("error", error);
        alert("Кажется serever error ! ((");
      });
  }, []);

  useEffect(() => {
    if (!!rates) {
      const init = () => {
        handleAmount1Change(1);
      };
      init();
    }
  }, [rates, setRates]);

  function format(number: any) {
    if (number <= 0) {
      return "";
    } else {
      return number.toFixed(2);
    }
  }

  function handleAmount1Change(amount1: any) {
    setAmount2(format((amount1 * rates[currency2]) / rates[currency1]));
    setAmount1(amount1);
  }

  function handleCurrency1Change(currency1: any) {
    setAmount2(format((amount1 * rates[currency2]) / rates[currency1]));
    setCurrency1(currency1);
  }

  function handleAmount2Change(amount2: any) {
    setAmount1(format((amount2 * rates[currency1]) / rates[currency2]));
    setAmount2(amount2);
  }

  function handleCurrency2Change(currency2: any) {
    setAmount1(format((amount2 * rates[currency1]) / rates[currency2]));
    setCurrency2(currency2);
  }

  return {
    amount1,
    setAmount1,
    amount2,
    setAmount2,
    currency1,
    setCurrency1,
    currency2,
    setCurrency2,
    setRates,
    rates,
    handleAmount1Change,
    handleCurrency1Change,
    handleAmount2Change,
    handleCurrency2Change,
    usd,
    eur,
  };
};

export default useConverter;
