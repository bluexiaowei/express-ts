import * as logs from "@/log";
import router from "@/router";
import bodyParser from "body-parser";
import { errors } from "celebrate";
import cookieParser from "cookie-parser";
import express, { NextFunction, Request, Response } from "express";

const app = express();

app.use(logs.dev);
app.use(bodyParser());
app.use(cookieParser());

app.use(router);

app.use(errors());
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err.name === "UnauthorizedError") {
    res.status(401).json({ success: false, message: "invalid token..." });
  }
});

app.listen(3000, () => {
  console.log("http://location:3000");
});
