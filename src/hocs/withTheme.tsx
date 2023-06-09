'use client'

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '@/themes/lightTheme';
import { darkTheme } from '@/themes/darkTheme';
import { GlobalStyle } from '@/themes/GlobalStyle';
import { CHANGE_THEME_EVENT, IS_DARK_THEME } from '@/constants/constants';
// import { FontStyle } from '@/themes/FontStyles';

const withTheme = <P extends object>(WrappedComponent: React.ComponentType<P>) =>
    function WithTheme(props: P) {
        const getThemeValue = () => {
            const isDarkTheme = typeof window !== 'undefined' ? localStorage.getItem(IS_DARK_THEME) : null;
            return isDarkTheme && JSON.parse(isDarkTheme) ? darkTheme : lightTheme;
        };

        const [theme, setTheme] = React.useState(getThemeValue());

        const handleThemeChange = React.useCallback(() => setTheme(getThemeValue()), []);

        React.useEffect(() => {
            window.addEventListener(CHANGE_THEME_EVENT, handleThemeChange);

            return () => {
                window.removeEventListener(CHANGE_THEME_EVENT, handleThemeChange);
            };
        }, [handleThemeChange]);

        return (
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                {/* <FontStyle /> */}
                <WrappedComponent {...props} />
            </ThemeProvider>
        );
    };

export default withTheme;

// interface IWithThemeProps {
//     children: React.ReactNode;
// }

// const WithTheme: React.FC<IWithThemeProps> = (props) => {
//     // ReactDOM.preload('/fonts/Roboto400.woff', { as: 'font', crossOrigin: '' });
//     // ReactDOM.preload('/fonts/Roboto400.woff2', { as: 'font', crossOrigin: '' });
//     // ReactDOM.preload('/fonts/Roboto700.woff', { as: 'font', crossOrigin: '' });
//     // ReactDOM.preload('/fonts/Roboto700.woff2', { as: 'font', crossOrigin: '' });

//     const getThemeValue = () => {
//         const isDarkTheme = typeof window !== 'undefined' ? localStorage.getItem(IS_DARK_THEME) : null;
//         return isDarkTheme && JSON.parse(isDarkTheme) ? darkTheme : lightTheme;
//     };

//     const [theme, setTheme] = React.useState(getThemeValue());

//     const handleThemeChange = React.useCallback(() => setTheme(getThemeValue()), []);

//     React.useEffect(() => {
//         window.addEventListener(CHANGE_THEME_EVENT, handleThemeChange);

//         return () => {
//             window.removeEventListener(CHANGE_THEME_EVENT, handleThemeChange);
//         };
//     }, [handleThemeChange]);

//     return (
//         <ThemeProvider theme={theme}>
//             <GlobalStyle />
//             {/* <FontStyle /> */}
//             {props.children}
//         </ThemeProvider>
//     );
// };

// export default WithTheme;
