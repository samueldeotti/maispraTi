const prompt = require('prompt-sync')();

const readData = (numPeople) => {
  const names = [];
  const ages = [];

  for (let i = 0; i < numPeople; i++) {
    const name = prompt(`Digite o nome da pessoa ${i + 1}:`);
    const age = Number(prompt(`Digite a idade de ${name}:`));

    names.push(name);
    ages.push(age);
  }

  return { names, ages };
};

const displayUnderagePeople = (names, ages) => {
  console.log('Pessoas menores de idade:');
  for (let i = 0; i < names.length; i++) {
    if (ages[i] < 18) {
      console.log(`Nome: ${names[i]}, Idade: ${ages[i]}`);
    }
  }
};

const { names, ages } = readData(9);
displayUnderagePeople(names, ages);
