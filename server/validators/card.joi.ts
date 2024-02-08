import Joi from "Joi";
import { Address, Image, cardInput } from "../DB/types/db";
import { patterns } from "./regex";

export const joiCardSchema = Joi.object<cardInput>({
  title: Joi.string().min(2).max(256).required(),
  subtitle: Joi.string().min(2).max(256).required(),
  description: Joi.string().min(2).max(1024).required(),
  phone: Joi.string().pattern(patterns.phone).min(9).max(11).required(),
  email: Joi.string().pattern(patterns.email).min(5).required(),
  web: Joi.string().uri().min(12),
  image: Joi.object<Image>({
    alt: Joi.string().min(2).max(256),
    url: Joi.string().uri().min(14),
  }),
  address: Joi.object<Address>({
    state: Joi.string().min(2).max(256),
    country: Joi.string().min(2).max(256).required(),
    city: Joi.string().min(2).max(256).required(),
    street: Joi.string().min(2).max(256).required(),
    houseNumber: Joi.number().min(1).required(),
    zip: Joi.number().min(1).required(),
  }),
});
