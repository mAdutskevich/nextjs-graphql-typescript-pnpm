import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    html,
    body {
        max-width: 100vw;
        overflow-x: hidden;
    }

    body {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        background-color: ${({ theme }) => theme.bodyColor};
        color: ${({ theme }) => theme.textColor};
    }

    a {
        color: inherit;
        text-decoration: none;
    }
`;
