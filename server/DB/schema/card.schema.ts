import { Schema } from "mongoose";
import { Card } from "../types/db";
import { imageSchema } from "./image.schema";
import { addressSchema } from "./address.schema";

export const cardSchema = new Schema<Card>({
  title: {
    type: String,
    min: 2,
    max: 256,
    required: true,
  },
  subtitle: {
    type: String,
    min: 2,
    max: 256,
    required: true,
  },
  description: {
    type: String,
    min: 2,
    max: 1024,
    required: true,
  },
  phone: {
    type: String,
    min: 9,
    max: 11,
    required: true,
  },
  email: {
    type: String,
    min: 5,
    required: true,
  },
  web: {
    type: String,
    min: 12,
    required: false,
  },
  image: {
    type: imageSchema,
    required: true,
  },
  address: {
    type: addressSchema,
    required: true,
  },
  bizNumber: {
    type: Number,
    required: false,
    default: () => {
      return Math.floor(Math.random() * 100000000);
    },
  },
  likes: {
    type: [String],
    required: false,
    default: [],
  },
  createdAt: {
    type: Date,
    required: false,
    default: Date.now,
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
    //required: true,
  },
});
//TODO:return on this part from the lesson
