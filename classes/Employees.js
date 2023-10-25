class Employees {
  #salary = 0;
  #isHired;
  static #allEmployees = [];
  static totalSalary = 0;
  constructor(name, position, salary, isHired) {
    this.name = name;
    this.position = position;
    this.#salary = salary;
    this.#isHired = true;
    Employees.#allEmployees.push(this);
    console.log(`name: ${this.name}, salary: ${this.#salary}`);
    Employees.totalSalary += this.#salary;
  }
  getSalary() {
    return this.#salary;
  }
  setSalary(amount) {
    Employees.totalSalary -= this.getSalary();
    this.#salary = amount;
    Employees.totalSalary += this.#salary;
  }
  getStatus() {
    return this.#isHired;
  }
  setStatus(command) {
    command === "hire" ? (this.#isHired = true) : (this.#isHired = false);
  }
  static getEmployees() {
    return this.#allEmployees;
  }
  static getTotalPayroll() {
    // let sum = 0;
    // this.#allEmployees.forEach((salary) => {
    //   sum += salary.returnSalary();
    //   console.log(salary);
    // });
    // return sum;
    return Employees.totalSalary;
  }
}

module.exports = {
  Employees,
};
