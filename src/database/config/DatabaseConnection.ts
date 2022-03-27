import { Sequelize } from "sequelize";

export default class DatabaseConnection {
  dbConnection: Sequelize;

  constructor() {
    this.dbConnection = new Sequelize(require("./DatabaseConfig"));
  }
}
