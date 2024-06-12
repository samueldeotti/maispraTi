const prompt = require('prompt-sync')();

const calculateAP = (firstTerm, commonDifference) => {
  const terms = [];
  let sum = 0;

  for (let i = 0; i < 10; i++) {
    const currentTerm = firstTerm + i * commonDifference;
    terms.push(currentTerm);
    sum += currentTerm;
  }

  return { terms, sum };
};

const firstTerm = Number(prompt('Informe o primeiro termo: '));
const commonDifference = Number(prompt('Informe a razão:'));

const { terms, sum } = calculateAP(firstTerm, commonDifference);

console.log('Os 10 primeiros termos da PA são:');
terms.forEach((term) => {
  console.log(term);
});

console.log('A diferença entre os 10 primeiros termos é:', sum);
