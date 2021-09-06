import * as config from "@/config";
import ResMsg from "@/utils/ResMsg";
import { celebrate, Joi, Segments } from "celebrate";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";

export const POST = [
  celebrate({
    [Segments.BODY]: Joi.object({
      account: Joi.string().required(),
      password: Joi.string().required(),
    }),
  }),
  (req: Request, res: Response) => {
    const { account, password } = req.body;

    if (account !== "admin" || password !== "admin") {
      res.json(new ResMsg(false, "用户名或密码错误"));
    }

    const token = jwt.sign({ id: "001" }, config.jwt.secret, {
      algorithm: config.jwt.algorithm,
      expiresIn: config.jwt.expiresIn,
    });

    res.json(new ResMsg(true, { token, name: "admin" }));
  },
];
