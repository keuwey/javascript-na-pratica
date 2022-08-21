function primo(a,b){
    let n, i, flag = 0
	for (i=2; i<=b; ++i){
		if (n%i==0){
			flag=1
			break
		}
	}
	if (flag==0){
        console.log(`${n} é um numero primo.`)
	}
    else{
        console.log(`${n} não é um numero primo.`)
	}
}
primo(0,50)