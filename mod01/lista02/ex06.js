const prompt = require('prompt-sync')();

let value = Number(prompt('Digite um valor: '));

const randomValue = Math.floor(Math.random() * 5) + 1;

console.log(randomValue);
while (value !== randomValue) {
  console.log('Tente novamente!');

  value = Number(prompt('Digite um valor: '));
}

console.log('Parabéns! Você acertou!');
