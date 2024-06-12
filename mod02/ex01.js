const prompt = require('prompt-sync')();

const cigarettes = Number(prompt('Digite a quantidade de cigarros fumados por dia: '));
const yearsSmoking = Number(prompt('Digite a quantidade de anos fumando: '));

const totalCigarettes = cigarettes * yearsSmoking * 365;
const totalDays = (totalCigarettes * 10) / 1440;

console.log(`Você perdeu ${totalDays.toFixed(2)} dias de vida.`);
