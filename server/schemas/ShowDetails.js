const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our database's showdetails data structure
const showDetailsSchema = new Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    showId: {
      type: Number,
      required: [true, "Show id cannot be empty"]
    },
    bookNowUrl: {
      type: String,
      required: [true, "BookNow URL cannot be empty"]
    },
    startTime: {
      type: Date,
      required: [true, "Movie start time cannot be empty"]
    },
    endTime: {
      type: Date,
      required: [true, "Movie end time cannot be empty"]
    },
    screeningDate: {
      type: Date,
      required: [true, "Movie show date cannot be empty"]
    },
    theaterId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Theater",
      required: [true, "Theaterid cannot be set to empty"]
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
module.exports = mongoose.model("ShowDetails", showDetailsSchema, "showdetailsCollection");
