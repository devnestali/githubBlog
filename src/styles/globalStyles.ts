import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        font-size: 62.5%;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 1px ${props => props.theme.blue}
    }

    body {
        background: ${props => props.theme.dark_gray_900};
        color: ${props => props.theme.gray_100};
        -webkit-font-smoothing: antialiased;

        &::-webkit-scrollbar {
            width: 4px;
        }

        &::-webkit-scrollbar-track {
            background: transparent;
            border-radius: 10px;
        }

        &::-webkit-scrollbar-thumb {
            background: ${props => props.theme.dark_gray_700};
        }
    }

    body, input {
        font: 400 1.6rem 'Nunito', sans-serif;
        line-height: 160%;
    }
`;