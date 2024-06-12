const prompt = require('prompt-sync')();

class Employee {
  constructor(id, name, grossSalary) {
    this.id = id;
    this.name = name;
    this.grossSalary = grossSalary;
  }

  calculateINSS() {
    const INSSRate = 0.12;
    return this.grossSalary * INSSRate;
  }

  calculateNetSalary() {
    const INSS = this.calculateINSS();
    return this.grossSalary - INSS;
  }

  printPaySlip() {
    const INSS = this.calculateINSS();
    const netSalary = this.calculateNetSalary();

    console.log('Matrícula:', this.id);
    console.log('Nome:', this.name);
    console.log('Salário bruto:', this.grossSalary.toFixed(2));
    console.log('Dedução INSS:', INSS.toFixed(2));
    console.log('Salário líquido:', netSalary.toFixed(2));
  }
}

const employees = [];

for (let i = 0; i < 80; i++) {
  console.log(`Funcionario: ${i + 1}`);
  const id = prompt('Matrícula: ');
  const name = prompt('Nome: ');
  const grossSalary = parseFloat(prompt('Salário bruto: '));

  const employee = new Employee(id, name, grossSalary);
  employees.push(employee);
}

console.log('\nContracheques:');
employees.forEach((employee) => {
  console.log('\nContracheque para', employee.name);
  employee.printPaySlip();
});
