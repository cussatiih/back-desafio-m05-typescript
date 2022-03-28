import { Model, DataTypes } from "sequelize";
import DatabaseConnection from "../config/DatabaseConnection";

const dbConnection = new DatabaseConnection().dbConnection;

export default class User extends Model {
  private id!: number;
  private name!: string;
  private email!: string;
  private password!: string;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Please provide a valid name.",
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: "Please provide a valid email.",
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Please Provide a valid password.",
        },
      },
    },
  },
  {
    sequelize: dbConnection,
    tableName: "user",
  }
);
