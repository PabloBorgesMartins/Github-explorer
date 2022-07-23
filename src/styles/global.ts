import { createGlobalStyle } from 'styled-components';
import githubLogo from '../assets/github.svg';

export const GlobalStyle = createGlobalStyle`
    :root{
        --white: #ffffff;
        --green: #04D361;
        --gray-100: #F2F2FA;
        --gray-300: #A8A8B3;
        --gray-400: #737380;
        --gray-500: #6C6C80;
        --gray-650: #3D3D4D;
        --gray-700: #3A3A3A;
        --gray-900: #121214;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        @media(max-width: 1080px){
            font-size: 93.75%;
        }
        @media(max-width: 720px){
            font-size: 87.5%;
        }
    }

    body{
        background-color: var(--gray-100);
        background-image: url(${githubLogo}); 
        background-repeat: no-repeat;
        background-position: 35vw 0;
        background-size: clamp(120px,40vw,680px);
        -webkit-font-smoothing: antialised;
    }

    body, input, textarea, button{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 600;
    }

    button{
        cursor: pointer;
    }

    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }

    ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
    }
    ::-webkit-scrollbar-track {
        background-color: var(--gray-700);
    }
    ::-webkit-scrollbar-thumb {
        background-color: var(--gray-100);
        border-radius: 16px;
    }
`
