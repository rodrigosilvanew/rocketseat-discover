//Manipulando conteúdo

/*
//textContent
const element = document.querySelector('h1')
element.textContent += ' Olá, Devs!'
console.log(element.textContent)
*/


/*
//Manipulando texto
//innerText
const element = document.querySelector('h1')
element.innerText = 'Olá, Devs!'
*/


/*
//innerHTML
const element = document.querySelector('h1')
element.innerHTML = 'Olá, Devs! <small>!!!</small>'
*/


/*
//value
const element = document.querySelector('input')
element.value = 'Valor que eu quiser'
*/


//Atributos
const header = document.querySelector('header')
header.setAttribute('id', 'header')

const headerID = document.querySelector('#header')

console.log(headerID.getAttribute('class'))

header.removeAttribute('id')

header.setAttribute('class', 'bg header')