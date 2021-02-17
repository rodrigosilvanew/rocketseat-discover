//Eventos
/*
const h1 = document.querySelector('h1')
h1.addEventListener('click', print)

function print() {
    console.log('print')
}
*/


//Argumento event

const input = document.querySelector('input')

input.onkeydown = function(event) {
    console.log(event.key)
}