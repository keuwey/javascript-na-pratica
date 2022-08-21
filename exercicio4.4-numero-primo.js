function primo(){
    let n, i, flag = 0
	var readline = require('readline')
	var rl = readline.createInterface(process.stdin, process.stdout)
	rl.question("Escreva um número positivo: ", n => {
		for (i=2; i<=n/2; ++i){
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
		rl.close()
	})
}
primo()