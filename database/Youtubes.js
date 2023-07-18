const mongoose = require("mongoose");

const YouTubesSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    publishedAt: String,
    thumbnails: String,
  },
  {
    timestamps: true,
  }
);

const Youtubes = mongoose.model("youtubes", YouTubesSchema); // collection - posts

module.exports = {
  Youtubes,
};
