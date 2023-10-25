const { Employees } = require("./Employees");
class SoftwareEngineer extends Employees {
  #programmingLanguages;
  constructor(programmingLanguages) {
    super(programmingLanguages);
    this.#programmingLanguages = [];
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
