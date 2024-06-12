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
