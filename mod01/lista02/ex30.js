const { printMatrix, createMatrix } = require('./utils/matrixFunctions');

const sumRows = (matrix) => matrix
  .map((row) => row.reduce((sum, value) => sum + value, 0));

const sumColumns = (matrix) => {
  const sums = new Array(matrix[0].length).fill(0);
  matrix.forEach((row) => {
    row.forEach((value, index) => {
      sums[index] += value;
    });
  });
  return sums;
};

const printVector = (vector, label) => console.log(`${label}: [${vector.join(', ')}]`);

const matrix = createMatrix(5, 5);
const vectorSL = sumRows(matrix);
const vectorSC = sumColumns(matrix);

printMatrix(matrix);
printVector(vectorSL, 'Soma das linhas (SL)');
printVector(vectorSC, 'Soma das colunas (SC)');
