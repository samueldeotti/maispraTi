const prompt = require('prompt-sync')();

const printMatrix = (matrix) => {
  console.log('Matriz:');
  matrix.forEach((row) => {
    console.log(`[${row.join('][')}]`);
  });
};

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

module.exports = { printMatrix, createMatrix };
