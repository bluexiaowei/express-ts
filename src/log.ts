import fs from "fs";
import get from "lodash/get";
import isEmpty from "lodash/isEmpty";
import morgan from "morgan";
import path from "path";

const logPath = path.join(__dirname, "../logs/access.log");

morgan.token("body", (req) => {
  const body = get(req, "body", {});

  return isEmpty(body) ? "" : `\nbody:${JSON.stringify(body)}`;
});

export const dev = morgan(
  ":remote-addr :status :method :url :response-time :body",
  { stream: fs.createWriteStream(logPath, { flags: "a" }) }
);
