class Employees {
  #salary;
  #isHired;
  constructor(name, position, salary, isHired) {
    this.name = name;
    this.position = position;
    this.#salary = salary;
    this.#isHired = true;
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
}

module.exports = {
  Employees,
};
