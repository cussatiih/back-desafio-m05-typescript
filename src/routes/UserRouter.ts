import { Router } from "express";
import UserController from "../controllers/UserController";

export default class UserRouter {
  constructor(private router: Router, private userController: UserController) {
    this.router.post("/users", userController.create);
    this.router.get("/users/:id", userController.show);
  }
}
