const generateFibonacci = () => {
  const fibonacci = [1, 1];

  for (let i = 2; i < 15; i++) {
    const nextElement = fibonacci[i - 1] + fibonacci[i - 2];
    fibonacci.push(nextElement);
  }

  return fibonacci;
};

const fibonacciSequence = generateFibonacci();

console.log('Os 15 primeiros elementos da sequência de Fibonacci são:');
console.log(fibonacciSequence.join(', '));
