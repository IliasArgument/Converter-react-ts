import { FC, useContext, createContext, useState } from 'react';

export interface ITheme {
    toggle: boolean
    onThemeToggle?: () => void
}

const ThemeCtx = createContext<ITheme | null>(null)

const ThemeContext: FC<{ children: React.ReactNode }> = ({ children }) => {

    const [toggle, setToggle] = useState<boolean>(false)

    const onThemeToggle = () => {
        setToggle(!toggle)
    }
    return (
        <ThemeCtx.Provider value={{ toggle, onThemeToggle }}>
            {children}
        </ThemeCtx.Provider>
    );
};

export default ThemeContext;

export const ThemeState = () => {
    return useContext(ThemeCtx);
};
