const prompt = require('prompt-sync')();

const calculateIdealWeight = (height, gender) => {
  if (gender.toLowerCase() === 'masculino') return 72.7 * height - 58;
  if (gender.toLowerCase() === 'feminino') return 62.1 * height - 44.7;

  return 'Gênero inválido';
};

const height = parseFloat(prompt('Digite sua altura (em metros): '));
const gender = prompt('Digite seu gênero (masculino/feminino): ');

const idealWeight = calculateIdealWeight(height, gender);
console.log('Peso ideal:', idealWeight.toFixed(2), 'kg');
