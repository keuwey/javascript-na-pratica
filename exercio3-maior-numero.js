function maior(a,b,c){
    var maior = a;
    if (b > a) {
        maior = b;
    }
    if (c > maior) {
        maior = c;
    }
    console.log(maior);
    // console.log(Math.max(a,b,c));
}

maior(4,9,15);
maior(5,2,0);
maior(1,2,3)
maior(3,3,3);
