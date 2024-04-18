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
        --pink: #CF215B;
        --black: #202124;
        --light-grey: #F5F5F5;
        --dark-grey: #4F4F4F;
        --white: #FFFFFF;
    }

    body {
        font-family: "DM Sans", sans-serif;
        font-size: 16px;
        background-color: var(--white)
    }

    h1 {
        color: var(--dark-grey);
        font-size: 24px;
    }

    h2 {
        color: var(--dark-grey);
        font-size: 20px;    }

    button {
        font-size: 16px;
    }

    p {
        font-size: 14px;
    }

    text {
        font-size: 12px;
    }

    span {
        font-size: 10px;
    }

    a {
        text-decoration: none;
    }

    button {
        cursor: pointer;
    }

    li {
        list-style: none;
    }

`;
