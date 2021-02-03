/*

//function expression or anonymous function
let total = 0

//parameters
const sum = function(number1, number2){
    let total = number1 + number2
    return total
}


let number1 = 34
let number2 = 25
//sum(number1, number2) //arguments

//console.log(`o número 1 é ${number1}`)
//console.log(`o número 2 é ${number2}`)
console.log(`a soma é ${sum(number1, number2)}`)
console.log(total)

*/






/*
//Função é um liquidificador

function fazerSuco(fruta1, fruta2) {
    return fruta1 + fruta2
}

const copo = fazerSuco('banana', 'maçã')


console.log(copo)
*/









/*

//function scope
let subject

function createThink() {
    subject = 'study'
}

console.log(subject)
createThink()
console.log(subject)

*/



/*
//function hoisting

sayMyName();

function sayMyName() {
    console.log('Mayk')
}
*/



/*
//arrow function

const sayMyName = (name) => {
    console.log(name)
}

sayMyName('Mayk')
*/



/*
//callback function (função passada a outra função como argumento)

function sayMyName(name) {
    console.log('antes de executar a função callback')

    name()

    console.log('depois de executar a callback')
}

sayMyName(
    () => {
        console.log('estou em uma callback')
    }
)
*/

//*************************************************************

/*
Function() constructor
*expressão new
*criar um novo objeto
*this keyword
*/
/*
function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + " está andando"
    }
}

const mayk = new Person("Mayk")
const joao = new Person("João")
console.log(mayk.walk())
console.log(joao.walk())
*/


