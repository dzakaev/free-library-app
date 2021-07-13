const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const bookSchema = new Schema(
  {
    img: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);
const Book = model("Book", bookSchema);
module.exports = Book;
