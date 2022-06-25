import { FC, useState, useEffect, useRef } from 'react';
import { Theme, ThemeProvider } from '@mui/material';
import Cookies from 'js-cookie';
import { ThemeContext, ThemeMode, ThemeString } from './ThemeContext';
import { lightTheme, darkTheme } from '../themes/';

type ThemeState = Theme;

interface Props {
    children: JSX.Element | JSX.Element[];
}

export const ThemeContextProvider: FC<Props> = ({children}) => {
    const [themeString, setThemeString] = useState<ThemeString>('');
    const [mode, setMode] = useState<ThemeMode>('');
    const [theme, setTheme] = useState<ThemeState>(darkTheme);
    useEffect(() => {
        setTheme(
            Cookies.get('theme') === 'light' ? lightTheme 
            : Cookies.get('theme') === 'dark' ? darkTheme
            : window.matchMedia("(prefers-color-scheme: dark)").matches ? darkTheme : lightTheme
        );
    }, []);
    useEffect(() => {
        setThemeString(Cookies.get('theme') as ThemeString || 'system');
    }, []);
    useEffect(() => {
        setMode(theme === lightTheme ? 'light' : 'dark');
    }, [theme]);
    useEffect(() => {
        window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => changeTheme('system'))
    }, []);
    const changeTheme = (newTheme: ThemeString) => {
        if(newTheme === themeString) return;
        if(newTheme === 'system') {
            setTheme(
                window.matchMedia("(prefers-color-scheme: dark)").matches ? darkTheme
                : lightTheme
            )
        }else{
            setTheme(newTheme === 'light' ? lightTheme : darkTheme);
        }
        Cookies.set('theme', newTheme);
        setThemeString(newTheme);
    }
    return (
        <ThemeContext.Provider value={{theme,mode,changeTheme,currentTheme: themeString}}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}