function triangulo(a,b,c) {
    if (a <= 0 || b <= 0 || c <= 0) {
        console.log("Erro. Ângulo inválido");
    }
    else if (a + b + c == 180) {
        console.log("true");
    }
    else {
        console.log("false");
    }
}
triangulo(14,35,131);
triangulo(65,40,75);
triangulo(45,80,50);
triangulo(-45,60,165);