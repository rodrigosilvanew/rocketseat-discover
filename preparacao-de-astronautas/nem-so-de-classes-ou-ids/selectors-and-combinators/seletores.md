# Seletores
Conecta um elemento HTML com o CSS a fim de alterar o elemento.

## Tipos
* Element Selector
    - Todos os elementos HTML
* ID Selector
    - Um elemento que tenha um atributo `id`
    - Cada ID deverá ser único
* Class Selector
    - Os elementos que contenham um atributo `class`
    - Podemos ter uma ou mais classes
* Attribute Selector
    - Um elemento que tenha um atributo específico
* Pseudo-class selector
    - Elementos em um estado específico


## Múltiplos
Você poderá selecionar múltiplos elementos e aplicar alguma regra css para todos eles.

Usamos uma separação por vírgulas para isso.

```css
h1, p, a {
    color: red;
}
```