/*
Prototype

* prototype-based language
* prototype chain
* __proto__

*/
/************************************************************************************* */

/*
Type conversion (typecasting) vs Type coersion
* Alteração de um tipo de dado para outro tipo
*/

/*
console.log('9' + 5) //resultado será 95, pois o js usará uma coersion pra converter "à força" o número 5 em string para gerar o resultado
console.log(Number('9' + 5)) //o resultado será 14, pois usamos uma conversion para intencionalmente mudarmos o 9 para número
*/

/**************************************************************************************** */

/*
Manipular strings e números

Transformar string em número e número em string
 */
/*
 let string = "123"
 console.log(Number(string))
 let number = 321
 console.log(String(number))
 */

 /****************************************************************************************** */

 //Manipulando Strings e Números
 //Contar quantos caracteres tem uma palavra e quantos dígitos tem um número
/*
 let word = "Paralelepípedo"
 console.log(word.length)
 let number = 1234
 console.log(String(number).length)
 */

 /****************************************************************************************** */

 //Manipulando strings e números
 //Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula
 /*
let number = 329.919499492
console.log(number.toFixed(2).replace(".", ","))
*/

/******************************************************************************************** */

//Manipulando Strings e Números
//transforme letras maiúsculas em minúsculas e vice-versa
/*
let word = "Programar é muito bacana!"
console.log(word.toLowerCase().toUpperCase())
*/

/********************************************************************************************** */

//Manipulando Strings
//Verificar se o texto contém a palavra Amor
/*
let phrase = "Eu quero viver o Amor!"
console.log(phrase.includes("Amor")) //o includes é case sensitive
*/

/***********************************************************************************************/

//Manipulando Strings e Arrays
//Separe um texto que contém espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _
/*
//separando:
let phrase = "Eu quero viver o Amor!"
let myArray = phrase.split(" ")
console.log(myArray)
//juntando
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore)
*/

/************************************************************************************************* */

//Manipulando Arrays
//Criar array com construtor
/*
let myArray = new Array('a', 'b', 'c')
console.log(myArray)
*/

/********************************************************************************************** */

//Manipulando Arrays
//Contar elementos de um array
/*
console.log(['a', 'b', 'c'].length)
*/

/************************************************************************************************ */

//Manipulando Arrays
//Transformar uma cadeia de caracteres em elementos de um array
/*
let word = "manipulação"
console.log(Array.from(word))
*/

/*********************************************************************************************** */

//Manipulando arrays
/*
let techs = ['html', 'css', 'js']

//adicionar um item no fim
techs.push('nodejs')
//adicionar no começo
techs.unshift('sql')
//remover do fim
techs.pop()
//remover do começo
techs.shift()
//pegar somenete alguns elementos do array
console.log(techs.slice(1, 3)) //os argumentos são o início e o fim
//remover 1 ou mais intens em qualquer posição do array
techs.splice(1, 1) //argumentos início e quantos itens remover
//encontrar a posição de um elemento no array
let index = techs.indexOf('css')
*/