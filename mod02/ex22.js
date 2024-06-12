const prompt = require('prompt-sync')();

const calculatePopulationStatistics = () => {
  let totalSalary = 0;
  let totalChildren = 0;
  let highestSalary = -Infinity;
  let countSalaryUpTo350 = 0;
  let totalPeople = 0;

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const salary = Number(prompt(
      'Digite o salário da pessoa (ou digite "fim" para encerrar): ',
    ));
    if (!Number(salary)) break;

    const numChildren = Number(prompt('Digite o número de filhos: '));

    totalSalary += salary;
    totalChildren += numChildren;
    if (salary > highestSalary) highestSalary = salary;
    if (salary <= 350) countSalaryUpTo350++;
    totalPeople++;
  }

  const averageSalary = totalSalary / totalPeople;
  const averageChildren = totalChildren / totalPeople;
  const percentSalaryUpTo350 = (countSalaryUpTo350 / totalPeople) * 100;

  return {
    averageSalary,
    averageChildren,
    highestSalary,
    percentSalaryUpTo350,
  };
};

const statistics = calculatePopulationStatistics();
console.log('Média de salário da população:', statistics.averageSalary.toFixed(2));
console.log('Média do número de filhos:', statistics.averageChildren.toFixed(2));
console.log('Maior salário:', statistics.highestSalary.toFixed(2));
console.log(
  'Percentual de pessoas com salário até R$ 350,00:',
  `${statistics.percentSalaryUpTo350.toFixed(2)}%`,
);
