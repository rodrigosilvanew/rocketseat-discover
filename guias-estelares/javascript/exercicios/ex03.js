function tempConvert(temperature) {
    const celsius = temperature.toUpperCase().includes('C')
    const fahrenheit = temperature.toUpperCase().includes('F')

    if(!celsius && !fahrenheit) {
        throw new Error('Unidade de medida não identificada!')
    }
}

try {
    tempConvert('50z')
} catch (error) {
    console.log(error.message)
}