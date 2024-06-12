const { printMatrix, createMatrix } = require('./utils/matrixFunctions');

const findMaxAbsoluteValue = (row) => {
  return Math.max(...row.map(Math.abs));
};

const divideByMaxAbsoluteValue = (matrix) => {
  const modifiedMatrix = [];
  matrix.forEach((row) => {
    const maxAbsValue = findMaxAbsoluteValue(row);
    const modifiedRow = row.map((element) => element / maxAbsValue);
    modifiedMatrix.push(modifiedRow);
  });
  return modifiedMatrix;
};

const matrixM = createMatrix(12, 13);

console.log('Matriz original M:');
printMatrix(matrixM);

const modifiedMatrix = divideByMaxAbsoluteValue(matrixM);

console.log('Matriz modificada M: ');
printMatrix(modifiedMatrix);
