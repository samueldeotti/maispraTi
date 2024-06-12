const { printMatrix } = require('./utils/matrixFunctions');

const calculateColumnSum = (matrix) => {
  const columnSums = new Array(matrix[0].length).fill(0);
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      columnSums[j] += matrix[i][j];
    }
  }
  return columnSums;
};

const printColumnSums = (columnSums) => {
  console.log('Soma de cada coluna:');
  for (let i = 0; i < columnSums.length; i++) {
    console.log(`Coluna ${i + 1}: ${columnSums[i].toFixed(2)}`);
  }
};

const matrix = createMatrix(2, 2);
const columnSums = calculateColumnSum(matrix);

printMatrix(matrix);
printColumnSums(columnSums);
