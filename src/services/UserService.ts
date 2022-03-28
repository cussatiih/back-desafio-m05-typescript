import User from "../database/models/User";
import IUser from "../interfaces/IUser";
import createError from "http-errors";

class UserService {
  async create({ name, email, password }: IUser): Promise<User | boolean> {
    const [newUser, isCreated] = await User.findOrCreate({
      where: { email },
      defaults: {
        name,
        email,
        password,
      },
    });

    return isCreated ? newUser : isCreated;
  }

  async show(id: number): Promise<User> {
    const user = await User.findByPk(id);

    if (!user) throw new createError.NotFound("User not found.");
    return user;
  }
}

export default new UserService();
