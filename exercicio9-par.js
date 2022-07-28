function par(a,b,c){
    if (a != 0 && b != 0 && c != 0){
        if (a % 2 != 0 || b % 2 != 0 || c % 2 != 0){
            console.log("true");
        }
        else {
            console.log("false");
        }
    }
    else {
        console.log("ERRO");
    }
}

par(2,5,11);
par(3,13,17);
par(0,1,15);
par(1,2,4);
par(4,8,10);