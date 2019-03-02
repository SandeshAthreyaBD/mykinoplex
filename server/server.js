const axios = require("axios");
const { mongoose } = require("./db/mongoose");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");

const dbqueries_theater = require("./db/dbqueries_theater");
const dbqueries_showdetails = require("./db/dbqueries_showdetails");
const Data = require("./data");
const Theater = require("./schemas/Theater");
const ShowDetails = require("./schemas/ShowDetails");

const API_PORT = 3001;
const app = express();
const router = express.Router();

app.use(cors());
// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

let db = mongoose.connection;
// checks if connection with the database is successful
db.on("open", () => {
  console.log("connected to the database");
});
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// this is our create method
// this method adds new data in our database
router.route("/putData").post(async (req, res) => {
  const session = await db.startSession();
  session.startTransaction();

  try {
    const opts = { session: session };

    const { id, message } = req.body;
    let data = new Data({
      id: id,
      message: message
    });

    await Data.create(data)
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
        throw new Error("Error occurred while inserting data: " + error);
      });

    await Data.findOneAndUpdate(
      { id: id },
      { $set: { messag: "Updating after insert with transactions" } },
      opts
    )
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
        throw new Error(
          "Error occurred while updating after insert data: " + error
        );
      });

    await session.commitTransaction();
    session.endSession();

    return res
      .status(200)
      .json({ success: "data updated after insert successfully" });
  } catch (error) {
    // If an error occurred, abort the whole transaction and
    // undo any changes that might have happened

    await session.abortTransaction();
    session.endSession();

    return res.status(400).send("updating data adter insert failed" + error); // Rethrow so calling function sees error
  }
});

// queries for theater collection to read and write
router.route("/getTheater").get((req, res) => {
  const session = await db.startSession();
  await dbqueries_theater.findAllTheater(session)
  .then(result => {
    console.log(result);
    res.status(200).send(result);
  })
  .catch(error => {
    res.status(400).send(error);
  });
  session.endSession();
});

router.route("/getTheater/:id").get((req, res) => {
  const session = await db.startSession();
  await dbqueries_theater.findTheaterById(session, req.params.id)
  .then(result => {
    res.status(200).send(result);
  })
  .catch(error => {
    res.status(400).send(error);
  });
  session.endSession();
});

router.route("/insertTheater").post((req, res) => {
  const session = await db.startSession();
  await dbqueries_theater.insertOneTheater(session, req.body)
  .then(result => {
    res.status(200).send(result);
  })
  .catch(error => {
    res.status(400).send(error);
  });
  session.endSession();
});

router.route("/updateTheater/:id").post((req, res) => {
  const session = await db.startSession();
  session.startTransaction();
  try {
    const theaterId = req.params.id;
    await dbqueries_theater.updateTheaterById(session, req.body, theaterId, opts)
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
        throw new Error("Error occurred while updating theater: " + error);
      });

      const { theaterName, address } = req.body;
      let theater1 = new Theater({
        _id: new mongoose.Types.ObjectId(),
        theaterId: theaterId,
        theaterName: theaterName,
        address: {
          country: address.country,
          city: address.city,
          street: address.street,
          zipcode: address.zipcode
        }
      });
      await dbqueries_theater.insertOneTheater(session, theater1)
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
        throw new Error("Error occurred while inserting theater: " + error);
      });

    await session.commitTransaction();
    session.endSession();

    return res.status(200).json({ success: "theater updated with insert successfully" });

  } catch (error) {
    // If an error occurred, abort the whole transaction and
    // undo any changes that might have happened
    await session.abortTransaction();
    session.endSession();

    return res.status(400).send("updating data with insert failed" + error); // Rethrow so calling function sees error
  }
});

router.route("/deleteTheater/:id").post((req, res) => {
  const session = await db.startSession();
  let theaterId = res.params.theaterId;
  await dbqueries_theater.deleteTheaterById(session, theaterId)
  .then(result => {
    res.status(200).send(result);
  })
  .catch(error => {
    res.status(400).send(error);
  });
  session.endSession();
});

// queries for showdetails collection to read and write
router.route("/getShowDetails").get((req, res) => {
  const session = await db.startSession();
  await dbqueries_showdetails.findAllShowDetails(session)
  .then(result => {
    res.status(200).send(result);
  })
  .catch(error => {
    res.status(400).send(error);
  });
  session.endSession();
});

router.route("/getMultipleShowDetails").get((req, res) => {
  let showIds = res.params.userIds;
  const session = await db.startSession();
  await dbqueries_showdetails.findMultipleShowDetails(session, showIds)
  .then(result => {
    res.status(200).send(result);
  })
  .catch(error => {
    res.status(400).send(error);
  });
  session.endSession();
});

router.route("/getShowDetails/:id").get((req, res) => {
  let showId = req.params.showId;
  const session = await db.startSession();
  await dbqueries_showdetails.findShowDetailsById(session, showId)
  .then(result => {
    res.status(200).send(result);
  })
  .catch(error => {
    res.status(400).send(error);
  });
  session.endSession();
});

router.route("/insertShowDetails").post((req, res) => {
  const session = await db.startSession();
  await dbqueries_showdetails.insertOneShowDetail(session, req.body)
  .then(result => {
    res.status(200).send(result);
  })
  .catch(error => {
    res.status(400).send(error);
  });
  session.endSession();
});

router.route("/insertMultipleShowDetails").post((req, res) => {
  const showDetailsArray = req.params.showDetailsArray;

  ShowDetails.insertMany(showDetailsArray, err => {
    if (err) {
      res.status(400).send("adding multiple shows failed. err: " + err);
    }
    res
      .status(200)
      .json({ showDetailsArray: "multiple shows inserted successfully" });
  });
});

router.route("/updateShowDetails/:id").post((req, res) => {
  const {
    showId,
    bookNowUrl,
    startTime,
    endTime,
    screeningDate,
    theaterId
  } = req.body;

  ShowDetails.findOneAndUpdate(
    { showId: showId, inactivatedDateTime: 0, deletedDateTime: 0 },
    { $set: { inactivatedDateTime: Date.now } },
    (err, updatedshowinfo) => {
      if (!updatedshowinfo) {
        res.status(404).send("theater is not found");
      } else {
        axios.post("http://localhost:3001/api/insertShowDetails", {
          showId: showId,
          bookNowUrl: bookNowUrl,
          theaterId: theaterId,
          startTime: startTime,
          endTime: endTime,
          screeningDate: screeningDate
        });
      }
    }
  );
});

router.route("/deleteShowDetails/:id").post((req, res) => {
  let showId = res.params.showId;

  Theater.updateMany(
    { showId: showId, deletedDateTime: 0 },
    { $set: { deletedDateTime: Date.now } },
    (err, deletedshowinfo) => {
      if (err) {
        res.status(404).send("show is not found");
      } else {
        res.status(200).send("showdetails is deleted");
      }
    }
  );
});

// append /api for our http requests
app.use("/api", router);
// launch our backend into a port
app.listen(process.env.PORT || API_PORT, () =>
  console.log(`LISTENING ON PORT ${API_PORT}`)
);

module.exports = { app };
