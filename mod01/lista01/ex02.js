const prompt = require('prompt-sync')();

const voters = Number(prompt('Digite a quantidade de eleitores: '));

const validVotes = Number(prompt('Digite a quantidade de votos validos: '));
const nullVotes = Number(prompt('Digite a quantidade de votos nulos: '));
const blankVotes = Number(prompt('Digite a quantidade de votos brancos: '));

console.log(`Votos validos: ${((validVotes / voters) * 100).toFixed(2)}%`);
console.log(`Votos nulos: ${((nullVotes / voters) * 100).toFixed(2)}%`);
console.log(`Votos em branco: ${((blankVotes / voters) * 100).toFixed(2)}%`);
