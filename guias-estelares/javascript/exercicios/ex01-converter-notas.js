function converteNota(valor) {
    nota = valor
    notaA = nota >= 90 && nota <= 100
    notaB = nota >= 80 && nota <= 89
    notaC = nota >= 70 && nota <= 79
    notaD = nota >= 60 && nota <= 69
    notaF = nota < 60 && nota >= 0


    if(notaA) {
        console.log('A')
    } else if(notaB) {
        console.log('B')
    } else if(notaC) {
        console.log('C')
    } else if(notaD){
        console.log('D')
    } else if(notaF) {
        console.log('F')
    } else {
        console.log('Nota inválida!')
    }
}

converteNota(101)
converteNota(-1)
converteNota(0)
converteNota(1)
converteNota(45)
converteNota(60)
converteNota(61)
converteNota(75)
converteNota(85)
converteNota(95)
