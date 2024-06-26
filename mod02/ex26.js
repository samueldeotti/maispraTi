const { printMatrix, createMatrix } = require('./utils/matrixFunctions');

const multiplyMatrices = (matrixA, matrixB) => {
  const rows = matrixA.length;
  const columns = matrixA[0].length;
  const productMatrix = [];

  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < columns; j++) {
      row.push(matrixA[i][j] * matrixB[i][j]);
    }
    productMatrix.push(row);
  }

  return productMatrix;
};

const matrixA = createMatrix(3, 5);
const matrixB = createMatrix(3, 5);
const productMatrix = multiplyMatrices(matrixA, matrixB);

console.log('Matriz A:');
printMatrix(matrixA);

console.log('Matriz B:');
printMatrix(matrixB);

console.log('Produto Matriz P:');
printMatrix(productMatrix);
