import { Schema } from "mongoose";
import { Address } from "../types/db";

export const addressSchema = new Schema<Address>({
  state: {
    type: String,
    required: false,
    min: 2,
    max: 256,
  },
  country: {
    type: String,
    required: true,
    min: 2,
    max: 256,
  },
  city: {
    type: String,
    requierd: true,
    min: 2,
    max: 256,
  },
  street: {
    type: String,
    requierd: true,
    min: 2,
    max: 256,
  },
  houseNumber: {
    type: Number,
    requierd: true,
    min: 2,
    max: 256,
  },
  zip: {
    type: Number,
    requierd: true,
    min: 2,
    max: 256,
  },
});
