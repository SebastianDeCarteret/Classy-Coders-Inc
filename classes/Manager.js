const { Employees } = require("./Employees");
class Manager extends Employees {
  #employeesManaged;
  constructor(department, employeesManaged) {
    super(department);
    this.department = department;
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
