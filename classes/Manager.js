const { Employees } = require("./Employees");
class Manager extends Employees {
  #employeesManaged;
  constructor(employeesManaged, position, salary) {
    super(employeesManaged, position, salary);
    this.#employeesManaged = [];
  }
  getEmployeesManaged() {
    return this.#employeesManaged;
  }
  setEmployeesManaged(employee) {
    this.#employeesManaged.push(employee);
  }
}

module.exports = {
  Manager,
};
