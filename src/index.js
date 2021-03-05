const strings = [
    "Hola ¿Quién Soy?",
    "Mariatrigoalado",
    "Algunas cosas solo pasan",
    "Voy a ti",
    "cree y verás",
    "Susana Valera",
    "Vive la vida",
    "Yo vivo mi vida",
    "A lo grande",
    "Grandes palabras",
    "string vacío",
    "OMG",
    "Fuertes palabras...",
    "Sigue buscando o ...",
    "Feliz navidad",
    "Hola Mundo"
]

function PrintRandomStr() {
    const strToPrint =  strings[Math.round(Math.random() * (strings.length - 1) ) ]

    console.log(strToPrint);
}

module.exports = {PrintRandomStr};