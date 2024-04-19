import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        border: none;
    };

    :root {
        --wine: #2C0713;
        --pink: #CF215B;
        --black: #202124;
        --gray: #D3D3D3;
        --light-gray: #F5F5F5;
        --dark-gray: #4F4F4F;
        --white: #FFFFFF;
    }

    body {
        font-family: "DM Sans", sans-serif;
        font-size: 16px;
        background-color: var(--white)
    }

    h1, h2 {
        color: var(--dark-gray);
        font-size: 24px;
    }

    h3 {
        color: var(--dark-grey);
        font-size: 20px;    }

    button {
        font-size: 16px;
    }

    a {
        font-size: 16px;
        text-decoration: none;
        cursor: pointer;
    }

    button {
        cursor: pointer;
    }

    li {
        list-style: none;
    }

`;
