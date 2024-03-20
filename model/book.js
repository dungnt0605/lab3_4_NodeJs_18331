import mongoose, { Schema } from "mongoose";

const BookSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: Number,
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const Book = mongoose.model("Book", BookSchema);
