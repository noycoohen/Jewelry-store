import { Schema } from "mongoose";
import { User } from "../types/db";
import { nameSchema } from "./name.schema";
import { imageSchema } from "./image.schema";
import { addressSchema } from "./address.schema";

export const userSchema = new Schema<User>({
  name: {
    type: nameSchema,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    min: 9,
    max: 11,
  },
  email: {
    type: String,
    unique: true,
    requierd: true,
    min: 5,
  },
  password: {
    type: String,
    required: true,
    min: 7,
    max: 1024,
  },
  image: {
    type: imageSchema,
    required: false,
  },
  address: {
    type: addressSchema,
    required: true,
  },
  isBusiness: {
    type: Boolean,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    required: false,
    default: false,
  },
});
