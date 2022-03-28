import express from "express";
import env from "dotenv-safe";
import UserRouter from "./routes/UserRouter";
import UserController from "./controllers/UserController";

export default class Server {
  private app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  public config(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  public routes(): void {
    new UserRouter(this.app, new UserController());
  }

  public start(): void {
    const port = env.config().parsed?.PORT;
    this.app.listen(process.env.PORT || port || 3333, () => {
      console.log("Server is listening on port", port);
    });
  }
}
