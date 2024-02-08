import { RequestHandler } from "express";

const notFound: RequestHandler = (req, res, next) => {
  res.status(400).json({ message: "Not Found" });
};

export default notFound;
