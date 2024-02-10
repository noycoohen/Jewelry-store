import Joi from "joi";
import { ILogin } from "../db/types/db";
import { patterns } from "./regex-patterns";

export const joiLoginSchema = Joi.object<ILogin>({
  email: Joi.string().email().min(5).required(),
  password: Joi.string().min(7).max(20).pattern(patterns.password).required(),
});
