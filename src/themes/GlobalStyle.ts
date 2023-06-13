import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
    ${normalize}
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
        background-color: ${({ theme }) => theme.bg.primary};
        color: ${({ theme }) => theme.text.secondary};
    }

    a {
        color: inherit;
        text-decoration: none;
    }
`;
