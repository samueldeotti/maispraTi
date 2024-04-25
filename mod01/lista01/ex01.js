const prompt = require('prompt-sync')()

const celsius = Number(prompt('Digite a temperatura em Celsius: '))

const fahrenheit = celsius * 1.8 + 32

console.log(`${celsius}°C é igual a ${fahrenheit}°F`)