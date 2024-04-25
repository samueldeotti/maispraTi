const prompt = require('prompt-sync')()


const appleQuantity = Number(prompt('Digite a quantidade de maças: '));

console.log(appleQuantity * (appleQuantity >= 12 ? 0.25 : 0.30) );

