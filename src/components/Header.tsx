import { FC } from 'react';
import ConverterLogo from '../assets/converter.png';
import { ThemeState } from '../provider/ThemeContext';
import ThemeToggle from './ThemeToggle';
import useConverter from './HomePage/useConverter';
import { format } from '../utils/format';

const Header: FC = () => {
    const { usd, eur } = useConverter();

    const theme = ThemeState()

    return (
        <header className={`header ${theme?.toggle ? 'active_header' : ''}`}>
            <div className='header_content'>
                <div className="logo">
                    <img src={ConverterLogo} alt='logo' />
                </div>
                <div className='rates'>
                    <div>
                        USD: {usd && eur ? format(+usd) : '**'}
                    </div>
                    <div>
                        EUR: {usd && eur ? format(+eur) : '**'}
                    </div>
                </div>
            </div>
            <ThemeToggle onToggleTheme={theme?.onThemeToggle} toggle={theme?.toggle} />
        </header>
    );
};

export default Header;