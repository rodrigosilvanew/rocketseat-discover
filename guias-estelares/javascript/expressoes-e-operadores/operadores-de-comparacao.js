//Operadores de comparação

//Irá comparar valores e retornar um Boolean como resposta à comparação

let one = 1
let two = 2

// == igual
console.log(one == 1)
console.log(one == "1")

// != diferente
console.log(one != two) //true
console.log(one != 1) //false
console.log(one != "1") //false

// === estritamente igual
console.log(one === "1") //false
console.log(one === 1) //true

// !== estritamente diferente
console.log(two === "2") //false
console.log(two === 2) //true

// > maior
console.log(one > two) //false

// >= maior igual
console.log(one >= 1) //true
console.log(two >= 1) //true

// < menor
console.log(one < two) //true

// <= menor igual
console.log(one <= two) //true
console.log(one <= 1) //true
console.log(one <= 0) //false
