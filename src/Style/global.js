import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
    */

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        background: url(${({theme}) => theme.backgroundImage}) no-repeat;
        background-color: ${({ theme }) => theme.backgroundColor};
        background-size: 100% 18rem, contain;
        font-family: 'Josefin Sans', sans-serif;
        transition: all 0.25s linear;
        line-height: 1;
        color: ${({theme}) => theme.colors.text};

        @media Screen and (max-width: 768px) {
            background: url(${({theme}) => theme.backgroundImageMobile}) no-repeat;
            background-color: ${({ theme }) => theme.backgroundColor};
            background-size: contain;
        }
            
    }
    button {
        border: none;
        background: transparent;
        cursor: pointer;
        font-family: 'Josefin Sans', sans-serif;
    }
    ol, ul {
        margin: 0;
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    input {
        font-family: 'Josefin Sans', sans-serif;
        box-sizing: border-box;
        width: 100%;
        color: ${({ theme }) => theme.colors.text};
        background-color: ${({ theme }) => theme.colors.primary};
        border: none;
        outline: none;
    }
`;
 
export default GlobalStyle;