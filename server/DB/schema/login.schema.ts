import { Schema } from "mongoose";
import { Login } from "../types/db";

export const loginSchema = new Schema<Login>({
  email: {
    type: String,
    min: 5,
    required: true,
  },
  password: {
    type: String,
    min: 7,
    max: 20,
    required: true,
  },
});
