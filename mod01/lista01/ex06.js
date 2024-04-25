const prompt = require('prompt-sync')()


const sideA = Number(prompt('Digite o valor do primeiro lado: '));
const sideB = Number(prompt('Digite o valor do segundo lado: '));
const sideC = Number(prompt('Digite o valor do terceiro lado: '));

if (sideA < sideB + sideC && sideB < sideA + sideC && sideC < sideA + sideB) {
  if (sideA === sideB && sideB === sideC) {
    console.log("Triângulo equilátero");
  } else if (sideA === sideB || sideA === sideC || sideB === sideC) {
    console.log("Triângulo isósceles");
  } else {
    console.log("Triângulo escaleno");
  }
}

