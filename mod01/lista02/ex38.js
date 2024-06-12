const prompt = require('prompt-sync')();

const readVector = (size) => {
  const vector = [];
  for (let i = 0; i < size; i++) {
    const element = parseFloat(prompt(`Insira o elemento ${i + 1}: `));
    vector.push(element);
  }
  return vector;
};

const sumElements = (vector) => vector.reduce((sum, element) => sum + element, 0);

const productElements = (vector) => vector
  .reduce((product, element) => product * element, 1);

const averageElements = (vector) => sumElements(vector) / vector.length;

const sortElements = (vector) => vector.slice().sort((a, b) => a - b);

const printVector = (vector) => {
  console.log('Vector:');
  console.log(vector.join(', '));
};

const vector = readVector(6);
// eslint-disable-next-line max-len
const operation = Number(prompt('Insira a operação (1: soma, 2: produto, 3: média, 4: ordenar, 5: mostrar): '));

switch (operation) {
case 1:
  console.log(`Sum of elements: ${sumElements(vector)}`);
  break;
case 2:
  console.log(`Product of elements: ${productElements(vector)}`);
  break;
case 3:
  console.log(`Average of elements: ${averageElements(vector)}`);
  break;
case 4:
  console.log('Sorted vector:');
  printVector(sortElements(vector));
  break;
case 5:
  printVector(vector);
  break;
default:
  console.log('Invalid operation.');
}
