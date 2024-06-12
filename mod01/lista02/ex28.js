const { createMatrix } = require('./utils/matrixFunctions');

const sumAboveDiagonal = (matrix) => {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i + 1; j < matrix[i].length; j++) {
      sum += matrix[i][j];
    }
  }
  return sum;
};

const sumBelowDiagonal = (matrix) => {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < i; j++) {
      sum += matrix[i][j];
    }
  }
  return sum;
};

const matrix = createMatrix(10, 10);
const sumAbove = sumAboveDiagonal(matrix);
const sumBelow = sumBelowDiagonal(matrix);

console.log(`Soma dos elementos acima da diagonal principal: ${sumAbove}`);
console.log(`Soma dos elementos abaixo da diagonal principal: ${sumBelow}`);
