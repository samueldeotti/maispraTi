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

const multiplyMatrixByValue = (matrix, value) => {
  const vector = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      vector.push(matrix[i][j] * value);
    }
  }
  return vector;
};

const printVector = (vector) => {
  console.log('Vetor V:');
  console.log(vector.join(', '));
};

const matrixM = createMatrix(6, 6);
const valueA = parseFloat(prompt('Insira o valor de A: '));

const vectorV = multiplyMatrixByValue(matrixM, valueA);
printVector(vectorV);
