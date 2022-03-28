import { Request, Response } from "express";
import UserService from "../services/UserService";

export default class UserController {
  async create(req: Request, res: Response): Promise<Response> {
    try {
      if (!req.body.email)
        res.status(400).json({ error: "Email is required." });

      const newUser = await UserService.create(req.body);

      if (!newUser) {
        return res.status(400).json({ message: "Email already in use." });
      }

      return res.status(201).json(newUser);
    } catch (e: any) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map((error: { message: any }) => error.message),
      });
    }
  }

  async show(req: Request, res: Response): Promise<Response> {
    const id = Number(req.params.id);

    if (isNaN(id))
      return res.status(400).json({ error: "ID parameter must be a number." });
    try {
      const user = await UserService.show(id);

      return res.status(200).json(user);
    } catch (e: any) {
      return res.status(e.statusCode).json({ error: e.message });
    }
  }
}
