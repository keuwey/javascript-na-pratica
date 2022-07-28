function nota(porcetagem){
    if (porcetagem < 0 || porcetagem > 100){
        console.log("Erro. Digite uma porcentagem válida.");
    }
    else if (porcetagem >= 90){
        console.log("A");
    }
    else if (porcetagem >= 80){
        console.log("B");
    }
    else if (porcetagem >= 70){
        console.log("C");
    }
    else if (porcetagem >= 60){
        console.log("D");
    }
    else if (porcetagem >= 50){
        console.log("E");
    }
    else {
        console.log("F");
    }
}
nota(90);
nota(80);
nota(70);
nota(60);
nota(50);
nota(47);