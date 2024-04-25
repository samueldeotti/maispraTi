const prompt = require('prompt-sync')()

const number1 = Number(prompt('Digite o primero numero: '));
const number2 = Number(prompt('Digite o segundo numero '));
const number3 = Number(prompt('Digite o terceiro numero '));
const number4 = Number(prompt('Digite o quarto numero '));

console.log("First number: ", number1 + 25);
console.log("Second number: ", number2 * 3);
console.log("Third number: ", number3 * 0.12);
console.log("Fourth number: ", number4 + number1 + number2 + number3);