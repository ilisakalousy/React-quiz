import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        font-family: 'Ubuntu', sans-serif;
    }

    html {
        height: 100%;
    }

    html,
    body {
        margin: 0;
    }
`;