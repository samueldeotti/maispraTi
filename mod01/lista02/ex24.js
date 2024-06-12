const prompt = require('prompt-sync')();

const createMatrix = (rows, columns) => {
  const matrix = [];
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < columns; j++) {
      const element = parseFloat(prompt(`Insira o valor de M[${i}][${j}]: `));
      row.push(element);
    }
    matrix.push(row);
  }
  return matrix;
};

const countNegatives = (row) => {
  let count = 0;
  for (let i = 0; i < row.length; i++) {
    if (row[i] < 0) count++;
  }
  return count;
};

const createVectorC = (matrix) => {
  const vectorC = [];
  for (let i = 0; i < matrix.length; i++) {
    const count = countNegatives(matrix[i]);
    vectorC.push(count);
  }
  return vectorC;
};

const printVectorC = (vectorC) => {
  console.log('Vetor C (quantidade de elementos negativos em cada linha de M):');
  console.log(vectorC.join(', '));
};

const matrixM = createMatrix(6, 8);
const vectorC = createVectorC(matrixM);

const printMatrix = (matrix) => {
  console.log('Matrix:');
  matrix.forEach((row) => {
    console.log(`[${row.join('][')}]`);
  });
};

printMatrix(matrixM);
printVectorC(vectorC);
