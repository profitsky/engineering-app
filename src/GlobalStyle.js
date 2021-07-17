import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --maxWidth: 1280px;
        --bluishCyan: #08151B;
        --orange: #ffaf46;
        --white: #fff;
        --headerHeight: 82px;
        --backgroundColor: #182f37;
  }

    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        z-index: 0;
    }

    body{        
        margin: 0 auto;
        font-family: 'Barlow Semi Condensed', sans-serif;
        background-color: var(--backgroundColor);
        
        h1 {
            font-size: 3rem;
            font-weight: 600;
            color: var(--white);
        }
    }

    html {
        // This defines what 1rem is
        font-size: 62.5%;
       
    }       
    `;
