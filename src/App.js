import { useState } from "react";
import { initialMessages } from "./assets/initialMessages";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import { AppContainer } from "./GlobalStyle";

function App() {
    // remetente atual
    const [currSender, setCurrSender] = useState("Army")
    
    // possíveis remetentes
    const [senders, setSenders] = useState([
        "Army",
        "Kim NamJoon",
        "Kim TaeHyung",
        "Jeon JungKook",
        "Kim SeokJin",
        "Jung HoSeok",
        "Min YoonGi",
        "Park JiMin"
    ])

    const [messages, setMessages] = useState(initialMessages)

    //Colocar status digitando quando o usuário digitar
    const [typing, setTyping] = useState("Online")

    const onChangeStatus = (value) => {
        setTyping(value)
    }

    // mudar o remetente atual
    const onChangeSender = (e) => {
        setCurrSender(e.target.value)
    }

    // deletar mensagem

    // tenho uma lista de mensagens
    // vou clicar duas vezes em cima de uma
    // vai perguntar se é para deletar
    // se der ok, a mensagem clicada será deletada da lista
    // se der cancel, não acontece nada

    const deleteMessage = (idToDelete) => {
        if (window.confirm("Você tem certeza que quer deletar esta mensagem?")) {
            const newMessages = [...messages] // precisamos fazer uma cópia para não ferir a regra de estado do react

            const indexToDelete = newMessages.findIndex(
                (message) => message.id === idToDelete // retorna um booleano
                // se true, é porque encontrou o item e o findIndex retorna o índice encontrado
                // se false, pula para o próximo item da lista
                // caso encerre a iteração da lista e não encontre o item, retorna -1
            )

            if (indexToDelete > -1) { // se encontrou o item, o índice será sempre maior que -1
                newMessages.splice(indexToDelete, 1)
                setMessages(newMessages)
            }
        }
    }

    const sendMessage = (text) => {
        const newMessage = {
            id: `${currSender}-${Math.ceil(Math.random() * 100000)}`,
            sender: currSender,
            content: text,
            createdAt: new Date()
                .toLocaleTimeString(  // cria uma data no tempo atual
                    "pt-BR",
                    {
                        hour: "numeric",
                        minute: "numeric",
                        hour24: true
                    }
                ) 
        }
        const newMessages = [...messages, newMessage]
        setMessages(newMessages)
    }

    return (
        <AppContainer>
            <Header
                typing={typing}
                senders={senders}
                currSender={currSender}
                onChangeSender={onChangeSender}/>
            <Main messages={messages} deleteMessage={deleteMessage} /> 
            <Footer sendMessage={sendMessage} onChangeStatus={onChangeStatus} />
        </AppContainer>
    )
}

export default App
