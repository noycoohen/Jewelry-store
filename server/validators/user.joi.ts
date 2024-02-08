import Joi from "joi";
import { Address, Image, Name, User } from "../DB/types/db";
import { patterns } from "./regex";

export const joiUserSchema = Joi.object<User>({
  email: Joi.string().email().min(5).max(30).required(),
  password: Joi.string().pattern(patterns.password).min(7).max(20).required(),
  phone: Joi.string().pattern(patterns.phone).min(9).max(11).required(),
  isBusiness: Joi.boolean().required(),
  name: Joi.object<Name>({
    first: Joi.string().min(2).max(256).required(),
    middle: Joi.string().min(2).max(256),
    last: Joi.string().min(2).max(256).required(),
  }),
  address: Joi.object<Address>({
    state: Joi.string().min(2).max(256),
    country: Joi.string().min(2).max(256).required(),
    city: Joi.string().min(2).max(256).required(),
    street: Joi.string().min(2).max(256).required(),
    houseNumber: Joi.number().min(2).max(256).required(),
    zip: Joi.number().min(2).max(256).required(),
  }),
  image: Joi.object<Image>({
    alt: Joi.string().min(2).max(256),
    url: Joi.string().uri().min(14),
  }),
});
