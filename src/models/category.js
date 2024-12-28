import mongoose from "mongoose";
const { Schema } = mongoose;

import * as validate from "../helpers/model/category";

const CategorySchema = Schema({
  category: {
    type: String,
    required: [true, "Please enter valid category"],
    validate: [validate.isValidCategory, "Please enter valid category"],
  },

  __v: {
    type: Number,
    select: false,
  },
});

export default mongoose.model("Category", CategorySchema);
