const prompt = require('prompt-sync')()


const grade1 = Number(prompt('Digite a primeira nota: '));
const grade2 = Number(prompt('Digite a segunda nota: '));

const average = (grade1 + grade2) / 2;

console.log(`The average grade is ${average.toFixed(2)}`);

console.log(average >= 6.0 ? "PARABÉNS! Você foi aprovado" : "Você foi REPROVADO! Estude mais");
