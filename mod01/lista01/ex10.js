const prompt = require('prompt-sync')();

const number = Number(prompt('Digite um número: '));

for (let index = 0; index <= 10; index++) {
  console.log(number);
}
