const prompt = require('prompt-sync')();

const carType = prompt('Digite o tipo do carro (popular ou luxo): ');
const days = Number(prompt('Digite a quantidade de dias: '));
const km = Number(prompt('Digite a quantidade de km rodados: '));

const total = carType === 'popular'
  ? (90 * days) + ((km > 100 ? 0.1 : 0.2) * km)
  : (150 * days) + ((km > 200 ? 0.25 : 0.3) * km);

console.log(total.toFixed(2));
