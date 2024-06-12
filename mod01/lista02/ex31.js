const prompt = require('prompt-sync')();

const createMatrix = (size) => {
  const matrix = [];
  for (let i = 0; i < size; i++) {
    const row = [];
    for (let j = 0; j < size; j++) {
      const element = Number(prompt(`Insira o valor da matriz[${i}][${j}]: `));
      row.push(element);
    }
    matrix.push(row);
  }
  return matrix;
};

const countOccurrences = (matrix, value) => {
  let count = 0;
  matrix.forEach((row) => {
    row.forEach((element) => {
      if (element === value) {
        count++;
      }
    });
  });
  return count;
};

const createFilteredMatrix = (matrix, value) => {
  const filteredMatrix = [];
  matrix.forEach((row) => {
    const filteredRow = row.filter((element) => element !== value);
    if (filteredRow.length > 0) {
      filteredMatrix.push(filteredRow);
    }
  });
  return filteredMatrix;
};

const printMatrix = (matrix, label) => {
  console.log(`${label}:`);
  matrix.forEach((row) => {
    console.log(`[${row.join('][')}]`);
  });
};

const valueA = parseInt(prompt('Insira um inteiro em A: '), 10);

const matrixV = createMatrix(30);
const occurrenceCount = countOccurrences(matrixV, valueA);
const filteredMatrixX = createFilteredMatrix(matrixV, valueA);

console.log(`Numero de ocorrencias de ${valueA} na matriz: ${occurrenceCount}`);
printMatrix(matrixV, 'Matriz V');
printMatrix(filteredMatrixX, 'Matriz filtrada X (tirando os valores iguais a A)');
