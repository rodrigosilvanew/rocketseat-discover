
//Criando e adicionando elementos

//createElement
const div = document.createElement('div')
div.innerText = 'Olá, devs!'

//append prepend
// const body = document.querySelector('body')
// body.append(div)

//Adicionando Elementos
//insertBefore
const body = document.querySelector('body')
const script = body.querySelector('script')
const header = body.querySelector('header')
//body.insertBefore(div, script)
body.insertBefore(div, header.nextSibling)
