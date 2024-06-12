const prompt = require('prompt-sync')();

const exerciseHours = Number(prompt('Digite a quantidade de horas de exercício: '));

const getPointsPerHour = (hours) => {
  if (hours <= 10) return 2;
  if (hours <= 20) return 5;
  return 10;
};

const pointsPerHour = getPointsPerHour(exerciseHours);

const totalPoints = exerciseHours * pointsPerHour;
const balance = totalPoints * 0.05;

console.log(`Você fez ${totalPoints} pontos e seu saldo é de ${balance}.`);
