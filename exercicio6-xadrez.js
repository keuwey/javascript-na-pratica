function xadrez(peca) {
    if (peca.toLowerCase() == "torre"){
        console.log("Linhas horizontais e verticais");
    }
    else if (peca.toLowerCase() == "cavalo") {
        console.log("Movimento de L");
    }
    else if (peca.toLowerCase() == "bispo") {
        console.log("Linhas diagonais");
    }
    else if (peca.toLowerCase() == "dama") {
        console.log("Linhas horizontais, verticais e diagonais");
    }
    else if (peca.toLowerCase() == "rei") {
        console.log("Uma casa em qualquer direção");
    }
}
xadrez("dama");
xadrez("CAvaLo");
xadrez("BiSpO");