const prompt = require('prompt-sync')();

console.log('pedra, papel ou tesoura?');
const firtsValue = prompt('Digite o primeiro valor: ');
const secondValue = prompt('Digite o segundo valor: ');

if (firtsValue === secondValue) {
  console.log('Empate!');
} else if (firtsValue === 'pedra' && secondValue === 'tesoura' || firtsValue === 'tesoura' && secondValue === 'papel' || firtsValue === 'papel' && secondValue === 'pedra') {
  console.log('Jogador 1 ganhou!');
} else {
  console.log('Jogador 2 ganhou!');
}
