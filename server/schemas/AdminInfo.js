const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our database's showdetails data structure
const adminInfoSchema = new Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    adminId: {
        type: Number,
        required: true
    },
    username: {
      type: String,
      required: [true, "Username cannot be empty"]
    },
    password: {
      type: String,
      required: [true, "Password is required"]
    },
    organiserinfo: {
      name: {
        type: String,
        required: [true, "Organiser name is required"]
      },
      country: {
        type: String,
        required: [true, "Organiser address Country is required"]
      },
      city: {
        type: String,
        required: [true, "Organiser address city is required"]
      },
      street: {
        type: String,
        required: [true, "Organiser address street is required"]
      },
      zipcode: {
        type: Number,
        required: [true, "Organiser address zipcode is required"]
      }
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
  "AdminInfo",
  adminInfoSchema,
  "admininfoCollection"
);
