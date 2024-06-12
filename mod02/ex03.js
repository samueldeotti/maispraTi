const prompt = require('prompt-sync')();

const distance = Number(prompt('Digite a distancia: '));

console.log(`O preço da passagem é R$ ${distance > 200 ? 0.45 : 0.50} por km.`);
console.log(`Valor da passagem: 
R$ ${distance > 200 ? distance * 0.45 : distance * 0.50}`);
