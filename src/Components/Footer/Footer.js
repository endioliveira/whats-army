import { useState } from "react";
import { FooterContainer } from "./styled.js";
import smiley from "../../assets/emoji-smile.svg";
import paperClip from "../../assets/paperclip.svg";
import microphone from "../../assets/microphone.svg";

function Footer(props) {
    const { sendMessage, onChangeStatus } = props

    const [ text, setText ] = useState("")

    const changeText = (e) => {
        onChangeStatus('Digitando...')
        setText(e.target.value)
    }

    // cb de limpeza do text
    const clearText = () => {
        setText("")
        onChangeStatus('Online')
    }

    const handleMessage = (e) => {
        if (e.key === "Enter") {
            sendMessage(text)
            clearText()
        }
    }

    return (
        <FooterContainer>
            <div>
                <button className="emoji">
                    <img src={smiley} alt="Emoji icon" />
                </button>

                <input
                    value={text}
                    onChange={changeText}
                    placeholder="Type a message"

                    onKeyDown={handleMessage}
                />
                
                <button className="paperclip">
                    <img src={paperClip} alt="Append icon" />
                </button>
            </div>

            <button className="microphone">
                <img src={microphone} alt="Microphone icon" />
            </button>
        </FooterContainer>
    )
}

export default Footer