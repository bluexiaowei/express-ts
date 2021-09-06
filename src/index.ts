import router from "@/router";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import express, { NextFunction, Request, Response } from "express";

const app = express();

app.use(bodyParser());
app.use(cookieParser());
app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err.name === "UnauthorizedError") {
    res.status(401).send("invalid token...");
  } else {
    next();
  }
});

app.listen(3000, () => {
  console.log("http://location:3000");
});
