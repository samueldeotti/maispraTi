const createIdentityMatrix = (rows, columns) => {
  const matrix = [];
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < columns; j++) {
      if (i === j) row.push(1);
      else row.push(0);
    }
    matrix.push(row);
  }
  return matrix;
};

const printMatrix = (matrix) => {
  console.log('Matriz Identidade:');
  matrix.forEach((row) => {
    console.log(`[${row.join('][')}]`);
  });
};

const identityMatrix = createIdentityMatrix(7, 7);
printMatrix(identityMatrix);
