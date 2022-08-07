import { FC } from 'react';
import CurrencyInput from '../CurrencyInput';
import { ThemeState } from '../../provider/ThemeContext';
import useConverter from './useConverter';


const Home: FC = () => {

    const {
        amount1,
        amount2,
        currency1,
        currency2,
        rates,
        handleAmount1Change,
        handleCurrency1Change,
        handleAmount2Change,
        handleCurrency2Change,
    } = useConverter();

    const theme = ThemeState();

    return (
        <main className={`home ${theme?.toggle ? 'active_home' : ''}`}>
            <h1 className={`${theme?.toggle ? 'active_h1' : ''}`}>Currency Converter</h1>
            <CurrencyInput
                onCurrencyChange={handleCurrency1Change}
                onAmountChange={handleAmount1Change}
                currencies={Object.keys(rates)}
                amount={amount1}
                currency={currency1} />
            <CurrencyInput
                onAmountChange={handleAmount2Change}
                onCurrencyChange={handleCurrency2Change}
                currencies={Object.keys(rates)}
                amount={amount2}
                currency={currency2} />
        </main>
    );
};

export default Home;