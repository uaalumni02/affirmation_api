import mongoose from "mongoose";
const { Schema } = mongoose;

const AffirmationInformationSchema = mongoose.Schema({
  affirmation: {
    type: String,
    required: [true, "affirmation is required"],
  },
  userName: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
  isFavorite: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  __v: {
    type: Number,
    select: false,
  },
});

export default mongoose.model("Affirmation", AffirmationInformationSchema);
