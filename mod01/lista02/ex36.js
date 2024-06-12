const prompt = require('prompt-sync')();

const readVector = (size) => {
  const vector = [];
  for (let i = 0; i < size; i++) {
    const element = Number(prompt(`Insira uma elemento ${i + 1}: `));
    vector.push(element);
  }
  return vector;
};

const compareAnswers = (answerKey, answer) => {
  let correctCount = 0;
  for (let i = 0; i < answerKey.length; i++) {
    if (answerKey[i] === answer[i]) {
      correctCount++;
    }
  }
  return correctCount;
};

const main = () => {
  const answerKey = readVector(13);

  for (let bettor = 1; bettor <= 100; bettor++) {
    const answer = readVector(13);
    const correctCount = compareAnswers(answerKey, answer);

    console.log(`Apostadora numero: ${bettor} - Numero corretos: ${correctCount}`);

    if (correctCount === 13) console.log('Parabéns, tu foi o GANHADOR');
  }
};

main();
