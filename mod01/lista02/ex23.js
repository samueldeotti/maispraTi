const { printMatrix } = require('./utils/matrixFunctions');

const createIdentityMatrix = (rows, columns) => {
  const matrix = [];
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < columns; j++) {
      if (i === j) row.push(1);
      else row.push(0);
    }
    matrix.push(row);
  }
  return matrix;
};

const identityMatrix = createIdentityMatrix(7, 7);
printMatrix(identityMatrix);
