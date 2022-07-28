function lucro(custo, valor){
    let custoMaisImposto = custo * 1.2;
    let valorMenosCusto = valor - custoMaisImposto;
    let milVendidos = valorMenosCusto * 1000;
    if (custo >= 0 && valor >= 0){
        console.log(`O lucro foi de ${milVendidos} com a venda de 1000 produtos`);
    }
    else {
        console.log("Erro");
    }
}
lucro(200, 500);