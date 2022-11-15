export const initialMessages = [
    {
        id: `Kim NamJoon-${Math.ceil(Math.random() * 100000)}`,
        sender: "Kim NamJoon",
        content: "Olá, Army!!",
        createdAt: new Date() // criando uma data no tempo atual
            .toLocaleTimeString(
                "pt-BR",
                {
                    hour: "numeric",
                    minute: "numeric",
                    hour24: true
                }
            ) 
    },
    {
        id: `Army-${Math.ceil(Math.random() * 100000)}`,
        sender: "Army",
        content: "Oii 💜",
        createdAt: new Date()
            .toLocaleTimeString(
                "pt-BR",
                {
                    hour: "numeric",
                    minute: "numeric",
                    hour24: true
                }
            ) 
    }
]