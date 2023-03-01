const tresValores = (idade, ensinoMedio, ensinoSuperior) => {
    if(idade >= 18){
        console.log("É maior de idade")
    } else {
        console.log("É menor de idade")
    }

    if(ensinoMedio === "sim") {
        console.log("Terminou o ensino médio")
    } else {
        console.log("Não terminou o ensino médio")
    }

    if(ensinoSuperior === "não") {
        console.log("Não esta cursando faculdade")
    } else {
        console.log("Esta cursando na faculdade")
    }
}

tresValores(33, "sim", "não")

const idadeUsuario = prompt("Qual a sua idade?")
const ensinoUsuario = prompt("Você terminou o ensino médio?")
const faculUsuario = prompt("Você esta cursando alguma faculdade?")

tresValores(idadeUsuario, ensinoUsuario, faculUsuario)
