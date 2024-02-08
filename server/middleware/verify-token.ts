import jwt from "jsonwebtoken";
import { RequestHandler } from "express";
import { ApplicationError } from "../error/application-error";
import { RequestUser } from "../@types/express";

export const verifyToken: RequestHandler = (req, res, next) => {
  const header = req.headers.authorization;

  if (!header) {
    throw new ApplicationError(400, "there is no header");
  }

  const token = header.split(" ")[1];
  const secret = process.env.JWT_SECRET ?? "";

  try {
    const payload = jwt.verify(token, secret) as RequestUser;
    req.user = payload;

    if (req.user?.isAdmin) {
      next();
    } else {
      throw new ApplicationError(401, "Only Admin");
    }
  } catch (err) {
    next(err);
  }
};
