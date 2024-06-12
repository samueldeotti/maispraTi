const { printMatrix, createMatrix } = require('./utils/matrixFunctions');

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

printMatrix(matrixM);
printVectorC(vectorC);
