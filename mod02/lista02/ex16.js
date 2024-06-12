const fillArrayWithRandomNumbers = (size) => {
  const array = [];

  for (let i = 0; i < size; i++) {
    array.push(Math.floor(Math.random() * 100));
  }

  return array;
};

const displayArray = (array, message) => {
  console.log(message);
  console.log(array.join(', '));
};

const sortArray = (array) => {
  return array.slice().sort((a, b) => a - b);
};

const numbers = fillArrayWithRandomNumbers(20);
displayArray(numbers, 'Números gerados:');

const sortedNumbers = sortArray(numbers);
displayArray(sortedNumbers, 'Números ordenados:');
