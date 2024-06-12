const prompt = require('prompt-sync')();

const readIntegers = (numIntegers) => {
  const integers = [];

  for (let i = 0; i < numIntegers; i++) {
    const number = Number(prompt(`Digite o número ${i + 1}:`));
    integers.push(number);
  }

  return integers;
};

const findEvenNumbers = (integers) => {
  const evenNumbers = [];
  const positions = [];

  for (let i = 0; i < integers.length; i++) {
    if (integers[i] % 2 === 0) {
      evenNumbers.push(integers[i]);
      positions.push(i);
    }
  }

  return { evenNumbers, positions };
};

const displayResult = (evenNumbers, positions) => {
  console.log('Números pares digitados e suas posições:');
  for (let i = 0; i < evenNumbers.length; i++) {
    console.log(`Número ${evenNumbers[i]} na posição ${positions[i]}`);
  }
};

const integers = readIntegers(10);
const { evenNumbers, positions } = findEvenNumbers(integers);
displayResult(evenNumbers, positions);
