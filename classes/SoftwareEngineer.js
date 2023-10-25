const { Employees } = require("./Employees");
class SoftwareEngineer extends Employees {
  #programmingLanguages;
  constructor(programmingLanguages, position, salary) {
    super(programmingLanguages, position, salary);
    this.#programmingLanguages = [programmingLanguages];
  }
  getProgrammingLanguages() {
    return this.#programmingLanguages;
  }
  setProgrammingLanguage(language) {
    this.#programmingLanguages.push(language);
  }
}

module.exports = {
  SoftwareEngineer,
};
