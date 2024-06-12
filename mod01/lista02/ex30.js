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

const sumRows = (matrix) => matrix
  .map((row) => row.reduce((sum, value) => sum + value, 0));

const sumColumns = (matrix) => {
  const sums = new Array(matrix[0].length).fill(0);
  matrix.forEach((row) => {
    row.forEach((value, index) => {
      sums[index] += value;
    });
  });
  return sums;
};

const printMatrix = (matrix) => {
  console.log('Matriz:');
  matrix.forEach((row) => {
    console.log(`[${row.join('][')}]`);
  });
};

const printVector = (vector, label) => console.log(`${label}: [${vector.join(', ')}]`);

const matrix = createMatrix(5, 5);
const vectorSL = sumRows(matrix);
const vectorSC = sumColumns(matrix);

printMatrix(matrix);
printVector(vectorSL, 'Soma das linhas (SL)');
printVector(vectorSC, 'Soma das colunas (SC)');
