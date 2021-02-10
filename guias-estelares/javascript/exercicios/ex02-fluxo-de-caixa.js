let contas = {
    receitas: [3500, 400, 1231.55, 741.93], 
    despesas: [200, 49.94, 59.90, 447.88, 180]
}

function sum(array) {
    let total = 0;
    for(let value of array) {
        total += value
    }
    
    return total
}

function contasGerais() {
    const calculoReceitas = sum(contas.receitas)
    const calculoDespesas = sum(contas.despesas)
    const total = calculoReceitas - calculoDespesas
    console.log(`Seu saldo é de ${total.toFixed(2)}`)
    if(total < 0) {
        console.log('Você está no vermelho!!!!!')
    } else {
        console.log('Você teve rendimentos esse mês.')
    }  
}

contasGerais(contas)