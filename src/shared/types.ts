export interface ICurrencies {
  USD: number;
  UAH: number;
  EUR: number;
}

export interface IFetchRates {
  base: string;
  date: string;
  rates: ICurrencies[];
}
