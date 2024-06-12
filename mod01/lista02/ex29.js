const { printMatrix, createMatrix } = require('./utils/matrixFunctions');

const sumRow = (matrix, rowIndex) => matrix[rowIndex]
  .reduce((sum, value) => sum + value, 0);

const sumColumn = (matrix, columnIndex) => matrix
  .reduce((sum, row) => sum + row[columnIndex], 0);

const sumDiagonal = (matrix) => {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    sum += matrix[i][i];
  }
  return sum;
};

const sumAllElements = (matrix) => {
  return matrix
    .reduce((sum, row) => sum + row.reduce((rowSum, value) => rowSum + value, 0), 0);
};

const matrix = createMatrix(5, 5);
const sumRow4 = sumRow(matrix, 3);
const sumColumn2 = sumColumn(matrix, 1);
const sumDiagonalPrincipal = sumDiagonal(matrix);
const sumAll = sumAllElements(matrix);

printMatrix(matrix);
console.log(`Soma da linha 4: ${sumRow4}`);
console.log(`Soma da coluna 2: ${sumColumn2}`);
console.log(`Soma da diagonal principal: ${sumDiagonalPrincipal}`);
console.log(`Soma de todos os elementos: ${sumAll}`);
