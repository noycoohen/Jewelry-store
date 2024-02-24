import { Schema } from "mongoose";
import { IImage } from "../types/db";

export const imageSchema = new Schema<IImage>({
  url: {
    type: String,
    required: false,
    default: "https://picsum.photos/200/300",
    maxlength: 1024,
  },
  alt: {
    type: String,
    required: false,
    default: "user avatar",
    maxlength: 100,
  },
});
