const prompt = require('prompt-sync')();

const createMatrix = (rows, columns) => {
  const matrix = [];
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < columns; j++) {
      const element = Number(prompt(`Insira o valor da matriz[${i}][${j}]: `));
      row.push(element);
    }
    matrix.push(row);
  }
  return matrix;
};

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

const printMatrix = (matrix, label) => {
  console.log(`${label}:`);
  matrix.forEach((row) => {
    console.log(`[${row.join('][')}]`);
  });
};

const matrixM = createMatrix(12, 13);

console.log('Matriz original M:');
printMatrix(matrixM, 'Matriz original M:');

const modifiedMatrix = divideByMaxAbsoluteValue(matrixM);

console.log('\nMatriz modificada M: ');
printMatrix(modifiedMatrix, 'Matriz modificada M');
