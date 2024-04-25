const prompt = require('prompt-sync')()

for (let index = 0; index <= 5 ; index++) {
  const value = Number(prompt('Digite um valor: '))
  for (let j = 1; j <= value; j++) {
    console.log(`${j} x ${value} = ${j * value}`)
  }
  
}