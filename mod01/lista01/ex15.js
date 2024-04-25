const prompt = require('prompt-sync')()


let value = Number(prompt('Digite um valor: '))
let weight = Number(prompt('Digite o peso do valor: '))

let sum = 0;
let sumWeight = 0;

while (value) {
  sum += value * weight;
  sumWeight += weight;
  value = Number(prompt('Digite um valor: '))
  weight = Number(prompt('Digite o peso do valor: '))
}

console.log(`Média ponderada: ${sum / sumWeight}`)
