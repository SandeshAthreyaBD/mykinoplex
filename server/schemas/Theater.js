const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our database's theater data structure
const theaterSchema = new Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    theaterId: {
      type: Number,
      required: [true, "Theater id cannot be empty"]
    },
    theaterName: {
      type: String,
      required: [true, "Theater name is required"]
    },
    inactivatedDateTime: {
      type: Number,
      default: 0
    },
    deletedDateTime: {
      type: Number,
      default: 0
    },
    address: {
      country: {
        type: String,
        required: [true, "Country is required"]
      },
      city: {
        type: String,
        required: [true, "city is required"]
      },
      street: {
        type: String,
        required: [true, "street is required"]
      },
      zipcode: {
        type: Number,
        required: [true, "zipcode is required"]
      }
    }
  },
  { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Theater", theaterSchema, "theaterCollection");
