const prompt = require('prompt-sync')();

const sourceCode = Number(prompt('Digite o codigo de origem: '));

switch (sourceCode) {
case 1:
  console.log('Sul');
  break;
case 2:
  console.log('Norte');
  break;
case 3:
  console.log('Leste');
  break;
case 4:
  console.log('Oeste');
  break;
case 5 || 6:
  console.log('Nordeste');
  break;
case 7 || 8 || 9:
  console.log('Sudeste');
  break;
case (sourceCode > 10 && sourceCode < 20):
  console.log('Centro-Oeste');
  break;
case (sourceCode > 25 && sourceCode < 50):
  console.log('Nordeste');
  break;
default:
  console.log('Produto Importado');
  break;
}
