const prompt = require('prompt-sync')();

const { printMatrix, createMatrix } = require('./utils/matrixFunctions');

const countOccurrences = (matrix, value) => {
  let count = 0;
  matrix.forEach((row) => {
    row.forEach((element) => {
      if (element === value) {
        count++;
      }
    });
  });
  return count;
};

const createFilteredMatrix = (matrix, value) => {
  const filteredMatrix = [];
  matrix.forEach((row) => {
    const filteredRow = row.filter((element) => element !== value);
    if (filteredRow.length > 0) {
      filteredMatrix.push(filteredRow);
    }
  });
  return filteredMatrix;
};

const valueA = parseInt(prompt('Insira um inteiro em A: '), 10);

const matrixV = createMatrix(30);
const occurrenceCount = countOccurrences(matrixV, valueA);
const filteredMatrixX = createFilteredMatrix(matrixV, valueA);

console.log(`Numero de ocorrencias de ${valueA} na matriz: ${occurrenceCount}`);

console.log('Matriz V:');
printMatrix(matrixV);

console.log('Matriz filtrada X (tirando os valores iguais a A)');
printMatrix(filteredMatrixX);
