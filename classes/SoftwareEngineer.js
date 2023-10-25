const { Employees } = require("./Employees");
class SoftwareEngineer {
  #programmingLanguages;
  constructor(programmingLanguages) {
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
