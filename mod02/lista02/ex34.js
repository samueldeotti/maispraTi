const { createMatrix } = require('./utils/matrixFunctions');

const multiplyRowByDiagonalElement = (matrix) => {
  const multipliedMatrix = [];
  for (let i = 0; i < matrix.length; i++) {
    const diagonalElement = matrix[i][i];
    const newRow = matrix[i].map((element) => element * diagonalElement);
    multipliedMatrix.push(newRow);
  }
  return multipliedMatrix;
};

const printMatrix = (matrix, label) => {
  console.log(`${label}:`);
  matrix.forEach((row) => {
    console.log(`[${row.join('][')}]`);
  });
};

const matrix = createMatrix(50, 50);
const multipliedMatrix = multiplyRowByDiagonalElement(matrix);

console.log('Matriz original M:');
printMatrix(matrix, 'Matriz original M:');

console.log('\nMatriz depois da multiplicação:');
printMatrix(multipliedMatrix, 'Matriz modificada M');
