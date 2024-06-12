const prompt = require('prompt-sync')();

const readNames = (numNames) => {
  const names = [];

  for (let i = 0; i < numNames; i++) {
    const name = prompt(`Digite o nome ${i + 1}: `);
    names.push(name);
  }

  return names;
};

const displayNamesInReverse = (names) => {
  console.log('Os nomes informados na ordem inversa são:');
  for (let i = names.length - 1; i >= 0; i--) {
    console.log(names[i]);
  }
};

const names = readNames(7);
displayNamesInReverse(names);
