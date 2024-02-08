import Joi from "joi";
import { Login } from "../DB/types/db";
import { patterns } from "./regex";

export const joiLoginSchema = Joi.object<Login>({
  email: Joi.string().email().min(5).required(),
  password: Joi.string().pattern(patterns.password).min(7).max(20).required(),
});
