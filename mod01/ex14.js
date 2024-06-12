const prompt = require('prompt-sync')();

let value = Number(prompt('Digite um valor: '));

let sum = 0;
let count = 0;

while (value) {
  sum += value;
  count++;
  value = Number(prompt('Digite um valor: '));
}

console.log(`Média: ${sum / count}`);
