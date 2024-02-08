import { Schema } from "mongoose";
import { Name } from "../types/db";

export const nameSchema = new Schema<Name>({
  first: {
    type: String,
    required: true,
    min: 2,
    max: 256,
  },
  middle: {
    type: String,
    required: false,
    default: "",
    min: 2,
    max: 256,
  },
  last: {
    type: String,
    required: true,
    min: 2,
    max: 256,
  },
});
