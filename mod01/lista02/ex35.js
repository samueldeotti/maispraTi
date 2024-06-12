const prompt = require('prompt-sync')();

const fillVectors = () => {
  const evenNumbers = [];
  const oddNumbers = [];

  for (let i = 0; i < 30; i++) {
    const number = Number(prompt(`Insira um número ${i + 1}: `));

    if (number % 2 === 0) {
      evenNumbers.push(number);
      if (evenNumbers.length === 5) {
        console.log('Vetor dos pares esta cheio:');
        console.log(evenNumbers);
        evenNumbers.length = 0;
      }
    } else {
      oddNumbers.push(number);
      if (oddNumbers.length === 5) {
        console.log('Vetor dos impares esta cheio:');
        console.log(oddNumbers);
        oddNumbers.length = 0;
      }
    }
  }

  console.log('Vetor final pares:');
  console.log(evenNumbers);

  console.log('Vetor final impares:');
  console.log(oddNumbers);
};

fillVectors();
