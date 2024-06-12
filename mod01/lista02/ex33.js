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

const printMatrix = (matrix, label) => {
  console.log(`${label}:`);
  matrix.forEach((row) => {
    console.log(`[${row.join('][')}]`);
  });
};

const matrix = createMatrix(3, 3);
const diagonalProduct = calculateDiagonalProduct(matrix);

console.log('Matriz original:');
printMatrix(matrix, 'Matriz original');
// eslint-disable-next-line max-len
console.log(`Produto da diagonal principal multiplicado pela media dos elementos da diagonal secundaria: ${diagonalProduct}`);
