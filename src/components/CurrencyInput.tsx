import { FC } from 'react';
import { ThemeState } from '../provider/ThemeContext';

interface IProps {
    amount: number
    onAmountChange: (amount: any) => void
    onCurrencyChange: (curr: any) => void
    currencies: any
    currency: string | any
}

const CurrencyInput: FC<IProps> = ({
    amount, onAmountChange, onCurrencyChange, currencies, currency
}) => {

    const theme = ThemeState();
    return (
        <div className={`group ${theme?.toggle ? 'theme_toggle' : ''}`}>
            <input className={`input ${theme?.toggle ? 'theme_input' : ''}`} value={amount} onChange={ev => onAmountChange(ev.target.value)} type='number' />
            <select className={`select ${theme?.toggle ? 'theme_input' : ''}`} value={currency} onChange={ev => onCurrencyChange(ev.target.value)}>
                {currencies?.map(((curr: any) => (
                    <option className={`option ${theme?.toggle ? 'theme_input' : ''}`} key={curr} value={curr}>{curr}</option>
                )))}
            </select>
        </div>
    );
}

export default CurrencyInput;