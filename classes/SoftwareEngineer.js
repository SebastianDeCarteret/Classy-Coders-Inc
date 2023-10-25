const { Employees } = require("./Employees");
class SoftwareEngineer extends Employees {
  #programmingLanguages;
  constructor(programmingLanguages, position, salary, languages) {
    super(programmingLanguages, position, salary);
    this.#programmingLanguages = languages;
  }
  getProgrammingLanguages() {
    return this.#programmingLanguages;
  }
  setProgrammingLanguages(language) {
    return this.#programmingLanguages.push(language);
  }
}

module.exports = {
  SoftwareEngineer,
};
