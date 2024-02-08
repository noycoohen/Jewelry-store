import { ErrorRequestHandler } from "express";
import { ApplicationError } from "../error/application-error";
import { MongooseError } from "mongoose";

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  //my error
  if (err instanceof ApplicationError) {
    return res.status(err.status).json({ message: err.message });
  }

  //Bad JSON:
  if (err instanceof SyntaxError) {
    return res
      .status(400)
      .json({ message: err.message + "!!", name: err.name });
  }

  //error from npm installed libaries or js/ts
  if (err instanceof Error) {
    return res.status(500).json({ message: err.message, err });
  }

  if (err instanceof MongooseError) {
    return res.status(500).json({ message: "err.message", err });
  }
  return res.status(500).json({ message: "something went wrong" });
};

export default errorHandler;
