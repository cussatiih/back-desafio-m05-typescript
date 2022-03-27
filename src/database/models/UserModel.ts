import { Model, DataTypes } from "sequelize";
import DatabaseConnection from "../config/DatabaseConnection";

const dbConnection = new DatabaseConnection().dbConnection;

export default class UserModel extends Model {
  private id!: number;
  private name!: string;
  private email!: string;
  private cpf!: string;
  private phone!: string;
  private address!: string;
  private addressTwo!: string;
  private district!: string;
  private city!: string;
  private state!: string;
}

UserModel.init(
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
        notEmpty: true,
        msg: "Field 'name' must be filled in.",
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
        isEmail: true,
        msg: "Field 'email' must be filled in with a valid email.",
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        msg: "Field 'password' must be filled in.",
      },
    },
  },
  {
    sequelize: dbConnection,
    tableName: "user",
  }
);
