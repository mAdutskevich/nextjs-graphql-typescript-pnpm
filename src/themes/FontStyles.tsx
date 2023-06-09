import { createGlobalStyle } from 'styled-components';

export const FontStyle = createGlobalStyle`
    @font-face {
        font-family: 'Roboto';
        src: url('./fonts/Roboto400.woff2') format('woff2'),
            url('./fonts/Roboto400.woff2') format('woff');
        font-style: normal;
        font-weight: 400;
        font-display: swap;
    }
    @font-face {
        font-family: 'Roboto';
        src: url('./fonts/Roboto700.woff2') format('woff2'),
            url('./fonts/Roboto700.woff') format('woff');
        font-style: normal;
        font-weight: 700;
        font-display: swap;
    }
`;
