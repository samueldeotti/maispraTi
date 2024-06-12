const { printMatrix, createMatrix } = require('./utils/matrixFunctions');

const calculateDiagonalProduct = (matrix) => {
  const diagonalMain = [];
  const diagonalSecondary = [];
  for (let i = 0; i < matrix.length; i++) {
    diagonalMain.push(matrix[i][i]);
    diagonalSecondary.push(matrix[i][matrix.length - 1 - i]);
  }
  const diagonalMainProduct = diagonalMain.reduce((product, value) => product * value, 1);
  const diagonalSecondaryMean = diagonalSecondary
    .reduce((sum, value) => sum + value, 0) / diagonalSecondary.length;
  return diagonalMainProduct * diagonalSecondaryMean;
};

const matrix = createMatrix(3, 3);
const diagonalProduct = calculateDiagonalProduct(matrix);

console.log('Matriz original:');
printMatrix(matrix);
// eslint-disable-next-line max-len
console.log(`Produto da diagonal principal multiplicado pela media dos elementos da diagonal secundaria: ${diagonalProduct}`);
