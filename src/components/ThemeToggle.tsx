import { FC } from 'react';

const ThemeToggle: FC<{ toggle?: boolean, onToggleTheme?: () => void }> = ({
    toggle, onToggleTheme
}) => {
    return (
        <div className={`switch ${toggle ? 'active' : ''}`} onClick={onToggleTheme}>
            <div></div>
            <div className={`circle ${toggle ? 'toggle' : ''}`}></div>
        </div>
    );
};

export default ThemeToggle;