import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export const GlobalStyles = createGlobalStyle`
    ${normalize}

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html {
        font-size: 62.5%;
    }
    body {
        font-family: 'Roboto', sans-serif, serif;
        font-size: 1.6rem;
        color: ${({ theme }) => theme.colors.text};
    }
    a {
        color: ${({ theme }) => theme.colors.text};
        text-decoration: none;
    }
    li {
        list-style: none;
    }
`
