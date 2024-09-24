import exp, { Express } from "express";
import "dotenv/config";
import authController from "./src/controllers/authController";
import userController from "./src/controllers/userController";
import postController from "./src/controllers/postController";

const app: Express = exp();

app.use("/auth", authController);
app.use("/user", userController);
app.use("/post", postController);

app.listen(process.env.PORT, (): void =>
  console.log(`See you at http::localhost:${process.env.PORT}`)
);
