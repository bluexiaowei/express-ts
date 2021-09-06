import * as config from "@/config";
import * as login from "@/routes/login";
import express from "express";
import jwt from "express-jwt";

const api = express.Router();

// API
api.post("/login", login.POST);
api.use(
  jwt({ secret: config.jwt.secret, algorithms: [config.jwt.algorithm] }).unless(
    { path: ["./login"] }
  )
);

// token
const router = express.Router();

router.use("/api", api);

export default router;
