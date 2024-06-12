const prompt = require('prompt-sync')();

const carSpeed = Number(prompt('Digite a velocidade do carro: '));

if (carSpeed > 80) {
  console.log('Você foi multado! A multa é de R$ 5,00 por km/h acima do limite.');
  console.log(`Valor da multa: R$ ${(carSpeed - 80) * 5}`);
}
