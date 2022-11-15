import styled, { createGlobalStyle } from "styled-components";
import wallpaper from "../src/assets/wallpaper.jpg"

export const GlobalStyle = createGlobalStyle`
    html {
        font-family: 'Roboto', sans-serif;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    #root {
        background-color: #BBBDDC;
        display: flex;
        justify-content: center;
    }
`

export const AppContainer = styled.div`
    width: 600px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-image: url(${wallpaper});
    background-size: cover;
`