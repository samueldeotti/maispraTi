let count = 0;
let value = 100;

while (count < 50) {
  let isPrime = true;

  if (value % 2 === 0 || value % 3 === 0) {
    isPrime = false;
  } else {
    let divisor = 5;
    while (divisor * divisor <= value) {
      if (value % divisor === 0 || value % (divisor + 2) === 0) {
        isPrime = false;
        break;
      }
      divisor += 6;
    }
  }

  if (isPrime) {
    console.log(value);
    count++;
  }

  value++;
}
