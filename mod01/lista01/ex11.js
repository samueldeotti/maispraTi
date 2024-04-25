const prompt = require('prompt-sync')()

let value = Number(prompt('Digite um valor: '))

while (value >= 0) {
  console.log(value % 2 === 0 ? 'PAR' : 'ÍMPAR')
  value = Number(prompt('Digite um valor: '))
}

