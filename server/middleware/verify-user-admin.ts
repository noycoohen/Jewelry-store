import jwt from "jsonwebtoken";
import { RequestHandler } from "express";
import { ApplicationError } from "../error/application-error";
import { RequestUser } from "../@types/express";

export const verifyUserOrAdmin: RequestHandler = (req, res, next) => {
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
      return next();
    }
    if (req.params.id === req.user?.id) {
      return next();
    }
    throw new ApplicationError(
      401,
      " You must bean an admin type user or the registered user"
    );
  } catch (err) {
    next(err);
  }
};
