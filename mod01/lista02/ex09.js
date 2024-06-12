const prompt = require('prompt-sync')();

const employeeSalary = Number(prompt('Digite o salario: '));
const employeeSex = prompt('Digite o sexo (m/f): ');

const employeesData = {
  male: { salary: 0 },
  female: { salary: 0 },
};

const addEmployeeData = (salary, sex) => {
  if (sex === 'm') employeesData.male.salary += salary;

  else employeesData.female.salary += employeeSalary;
};

addEmployeeData(employeeSalary, employeeSex);

do {
  whantContinue = prompt('Deseja continuar? (s/n): ');
  if (whantContinue === 'n') break;

  const employeeSalaryNew = Number(prompt('Digite o salario: '));
  const employeeSexNew = prompt('Digite o sexo (m/f): ');
  addEmployeeData(employeeSalaryNew, employeeSexNew);
} while (whantContinue !== 'n');

console.log(`Salario pago aos homens é de ${employeesData.male.salary}`);
console.log(`Salario pago as mulheres é de ${employeesData.female.salary}`);
