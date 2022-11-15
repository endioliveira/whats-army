import styled from "styled-components"


export const MainContainer = styled.div`
    /* background-color: #F1F4F7; */
    flex-grow: 1;
    padding: 16px;
    overflow-y: auto;
    ::-webkit-scrollbar {
        -webkit-appearance: none;
        display: none;
  }

    > div {
        display: flex;
        flex-direction: column;
    }
`

export const ChatBalloon = styled.div`
    min-width: 85px;
    max-width: 310px;

    border-radius: 10px;
    padding: 8px;

    margin: ${(props) =>
        props.sender === "Army"
            ? "0 0 16px auto"
            : "0 auto 16px 0"
    };

    color: ${(props) => props.sender === "Army" ? "white" : "black"};

    background-color: ${(props) => props.sender === "Army" ? "#8287BC" : "#E8ECEF"};

    h1 {
        font-size: 16px;
        font-weight: bold;
        color: #5A3A8D;
    }

    p {
        font-weight: 400;
        font-size: 16px;
        margin-top: 4px;
        overflow-wrap: break-word;
    }

    div {
        text-align: right;

        span {
            color: ${(props) => props.sender === "Army" ? "white" : "#727272"};
            font-weight: 400;
            font-size: 11px;
        }

        img {
            margin-left: 4px;
        }
    }
    
`