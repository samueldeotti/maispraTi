const prompt = require('prompt-sync')();

const readVector = (size) => {
  const vector = [];
  for (let i = 0; i < size; i++) {
    const element = parseFloat(prompt(`Insira o elemento ${i + 1}: `));
    vector.push(element);
  }
  return vector;
};

const compactVector = (vector) => vector.filter((element) => element && element > 0);

const printVector = (vector, label) => {
  console.log(`${label}:`);
  console.log(vector.join(', '));
};

const vectorA = readVector(100);
const vectorB = compactVector(vectorA);
printVector(vectorB, 'Vetor compactado (Vetor B)');
