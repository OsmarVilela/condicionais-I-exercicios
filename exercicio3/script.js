const verificacao = () => {
    const nacionalidade = prompt("Qual sua nacionalidade?")

    if(nacionalidade.toLowerCase() === "brasileira" || nacionalidade.toLowerCase() === "brasileiro") {
        console.log("Nacionalidade Brasileira")
    }

    if(nacionalidade.toLowerCase() === "argentina" || nacionalidade.toLowerCase() === "argentino") {
        console.log("Nacionalidade Argentina")
    }

    if(nacionalidade.toLowerCase() === "uruguaia" || nacionalidade.toLowerCase() === "uruguaio") {
        console.log("Nacionalidade Uruguaia")
    }

    if(nacionalidade.toLowerCase() === "chilena" || nacionalidade.toLowerCase() === "chileno") {
        console.log("Nacionalidade Chilena")
    }

    if(nacionalidade.toLowerCase() === "colombiana" || nacionalidade.toLowerCase() === "colombiano") {
        console.log("Nacionalidade Colombiana")
    } else {
        console.log("Nacionalidade não encontrada")
    }
}
verificacao()