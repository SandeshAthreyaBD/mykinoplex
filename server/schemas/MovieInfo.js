const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our database's movieinfo data structure
const movieInfoSchema = new Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    movieId: {
      type: Number,
      required: [true, "Movie id cannot be empty"]
    },
    movieName: {
      type: String,
      trim: true,
      required: [true, "Movie name cannot be empty"]
    },
    tagline: {
      type: String,
      trim: true
    },
    synopsis: {
      type: String,
      trim: true
    },
    cast: {
      type: String,
      trim: true
    },
    trailerUrl: String,
    genre: { type: [String] },
    posterimage: {
      data: Buffer,
      contentType: String
    },
    backdropimage: {
      data: Buffer,
      contentType: String
    },
    language: {
      type: String,
      required: [true, "language cannot be empty"]
    },
    status: {
      type: String,
      trim: true,
      required: [true, "Movie status cannot be empty"],
      enum: ["Now Showing", "Coming Soon", "Done"],
      default: "Coming Soon"
    },
    adminId: {
      type: Number,
      ref: "Admin",
      required: [true, "Admin/OrganiserId is requred"]
    },
    showIds: {
      type: [Number],
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
module.exports = mongoose.model(
  "MovieInfo",
  movieInfoSchema,
  "movieInfoCollection"
);
