const prompt = require('prompt-sync')();

const readVector = (size) => {
  const vector = [];
  for (let i = 0; i < size; i++) {
    const element = prompt(`Insira o elemento ${i + 1}: `);
    vector.push(element);
  }
  return vector;
};

const countCorrectAnswers = (answerKey, studentAnswers) => {
  let correctCount = 0;
  for (let i = 0; i < answerKey.length; i++) {
    if (answerKey[i] === studentAnswers[i]) {
      correctCount++;
    }
  }
  return correctCount;
};

const answerKey = readVector(20);

for (let student = 1; student <= 50; student++) {
  const studentAnswers = readVector(20);
  const correctCount = countCorrectAnswers(answerKey, studentAnswers);

  console.log(`Estudante ${student} - Numero de respostas corretas: ${correctCount}`);

  if (correctCount >= 12) console.log('APROVADO');
  else console.log('REPROVADO');
}
