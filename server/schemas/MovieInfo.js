const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our database's movieinfo data structure
const movieInfoSchema = new Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    movieName: {
      type: String,
      required: [true,"Movie name cannot be empty"]
    },
    tagline: {
      type: String
    },
    synopsis: String,
    cast: String,
    trailerUrl: String,
    genre: { type: [String] },
    image: {
      data: [Buffer],
      contentType: String,
      required: [true, "Minimum one image required"]
    },
    language: {
      type: String,
      required: [true, "language cannot be empty"]
    },
    status: {
      type: String,
      enum: ["Now Showing", "Coming Soon"]
    },
    adminId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
      required: [true, "Admin/OrganiserId is requred"]
    },
    showIds: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "ShowDetails"
    },
    inactivatedDateTime: {
      type: Number,
      default: 0
    },
    deletedDateTime: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("MovieInfo", movieInfoSchema, "movieInfoCollection");
