//switch

function calculate(number1, operator, number2) {
    let result

    switch (operator) {
        case '+':
            result: number1 + number2
            break;
        case '-':
            result: number1 - number2
            break
        case '*':
            result: number1 * number2
        case '/':
            result: number1 / number2
        default:
            console.log('não implementado')
            break;
    }
}

console.log(calculate(4, '+', 8))