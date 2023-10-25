class Employees {
  #salary;
  #isHired;
  static #allEmployees = [];
  constructor(name, position, salary, isHired) {
    this.name = name;
    this.position = position;
    this.#salary = salary;
    this.#isHired = true;
    Employees.#allEmployees.push(this);
  }
  getSalary() {
    return this.#salary;
  }
  setSalary(amount) {
    this.#salary = amount;
  }
  getStatus() {
    return this.#isHired;
  }
  setStatus(command) {
    command === "hire" ? (this.#isHired = true) : (this.#isHired = false);
  }
  returnSalary() {
    return this.#salary;
  }
  static getEmployees() {
    return this.#allEmployees;
  }
  static getTotalPayroll() {
    let sum = 0;
    this.#allEmployees.forEach((salary) => {
      sum += salary.returnSalary();
      console.log(salary.returnSalary);
    });
    return sum;
  }
}

module.exports = {
  Employees,
};
