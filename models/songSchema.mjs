import mongoose from "mongoose";

const songSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  artist: {
    type: String,
    required: true,
  },

  year: {
    type: Number,
  }
});
songSchema.index({name: 1})

export default mongoose.model("Song", songSchema);
