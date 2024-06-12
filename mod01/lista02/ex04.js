const prompt = require('prompt-sync')();

const segment1 = Number(prompt('Digite o valor da primeira reta: '));
const segment2 = Number(prompt('Digite o valor da segudna reta: '));
const segment3 = Number(prompt('Digite o valor da terceira reta: '));

if (segment1 < segment2 + segment3
  && segment2 < segment1 + segment3
  && segment3 < segment1 + segment2) {
  console.log('É possível formar um triângulo com essas retas.');
} else {
  console.log('Não é possível formar um triângulo com essas retas.');
}
