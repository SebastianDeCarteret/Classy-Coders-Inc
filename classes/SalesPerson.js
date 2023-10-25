const { Employees } = require("./Employees");

class SalesPerson extends Employees {
  #totalSales;
  constructor(clients) {
    super(clients);
    this.clients = clients;
    this.#totalSales = 0;
  }
  getSalesNumber() {
    return this.#totalSales;
  }
  makeSale(amount) {
    this.#totalSales += amount;
  }
}

module.exports = {
  SalesPerson,
};
