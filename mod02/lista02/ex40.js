const prompt = require('prompt-sync')();

const readVector = (size) => {
  const vector = [];
  for (let i = 0; i < size; i++) {
    const element = parseFloat(prompt(`Insira o elemento ${i + 1}: `));
    vector.push(element);
  }
  return vector;
};

const compareVectors = (officialResult, bet) => {
  for (let i = 0; i < officialResult.length; i++) {
    if (officialResult[i] !== bet[i]) return false;
  }
  return true;
};

console.log('Insira o resultado oficial:');
const officialResult = readVector(5);

let winnerFound = false;
for (let i = 1; i <= 50; i++) {
  console.log(`Insira os 5 numeros  ${i}:`);
  const bet = readVector(5);

  if (compareVectors(officialResult, bet)) {
    console.log(`Ganhador! Aposta numero ${i} é igual ao resultado oficial.`);
    winnerFound = true;
  }
}

if (!winnerFound) console.log('Sem vencedor');
