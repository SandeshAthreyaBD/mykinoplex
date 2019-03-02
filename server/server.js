const axios = require("axios");
const { mongoose } = require("./db/mongoose");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");

const dbqueries_theater = require("./db/dbqueries_theater");
const dbqueries_showdetails = require("./db/dbqueries_showdetails");
const dbqueries_movieinfo = require("./db/dbqueries_movieinfo");

const MovieInfo = require("./schemas/MovieInfo");
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


// queries for theater collection to read and write
router.route("/getTheater").get(async (req, res) => {
  const session = await db.startSession();
  await dbqueries_theater.findAllTheater(session)
  .then(result => {
    res.status(200).send(result);
  })
  .catch(error => {
    res.status(400).send(error);
  });
  session.endSession();
});

router.route("/getTheater/:id").get(async (req, res) => {
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

router.route("/insertTheater").post(async (req, res) => {
  const session = await db.startSession();
  await dbqueries_theater.insertTheater(session, req.body)
  .then(result => {
    res.status(200).send(result);
  })
  .catch(error => {
    res.status(400).send(error);
  });
  session.endSession();
});

router.route("/updateTheater/:id").post(async (req, res) => {
  const session = await db.startSession();
  session.startTransaction();
  try {
    const theaterId = req.params.id;
    await dbqueries_theater.updateTheaterById(session, req.body, theaterId)
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
      await dbqueries_theater.insertTheater(session, theater1)
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
        throw new Error("Error occurred while inserting updated theater: " + error);
      });

    await session.commitTransaction();
    session.endSession();

    return res.status(200).send("theater updated with insert successfully");

  } catch (error) {
    // If an error occurred, abort the whole transaction and
    // undo any changes that might have happened
    await session.abortTransaction();
    session.endSession();

    return res.status(400).send("updating theater with insert failed" + error); // Rethrow so calling function sees error
  }
});

router.route("/deleteTheater/:id").post(async (req, res) => {
  const session = await db.startSession();
  let theaterId = req.params.id;
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
router.route("/getShowDetails").get(async (req, res) => {
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

router.route("/getMultipleShowDetails").get(async (req, res) => {
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

router.route("/getShowDetails/:id").get(async (req, res) => {
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

router.route("/insertShowDetails").post(async (req, res) => {
  const showDetailsArray = req.body.showDetailsArray;
  const session = await db.startSession();
  await dbqueries_showdetails.insertShowDetails(session, showDetailsArray)
  .then(result => {
    res.status(200).send(result);
  })
  .catch(error => {
    res.status(400).send(error);
  });
  session.endSession();
});

router.route("/updateShowDetails/:id").post(async (req, res) => {
  const session = await db.startSession();
  session.startTransaction();
  try {
    const showId = req.params.id;
    await dbqueries_showdetails.updateShowDetailsById(session, req.body, showId)
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
        throw new Error("Error occurred while updating showdetails: " + error);
      });

      const { bookNowUrl, startTime, endTime, screeningDate, theaterId } = req.body;
      let showDetailsArray = new Array();

      let showdetails = new ShowDetails({
        _id: new mongoose.Types.ObjectId(),
        showId: showId,
          bookNowUrl: bookNowUrl,
          theaterId: theaterId,
          startTime: startTime,
          endTime: endTime,
          screeningDate: screeningDate
      });

      showDetailsArray.push(showdetails);

      await dbqueries_showdetails.insertShowDetails(session, showDetailsArray)
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
        throw new Error("Error occurred while inserting updated showdetails: " + error);
      });

    await session.commitTransaction();
    session.endSession();

    return res.status(200).json({ success: "showdetails updated with insert successfully" });

  } catch (error) {
    // If an error occurred, abort the whole transaction and
    // undo any changes that might have happened
    await session.abortTransaction();
    session.endSession();

    return res.status(400).send("updating showdetails with insert failed" + error); // Rethrow so calling function sees error
  }
});

router.route("/deleteShowDetails/:id").post(async (req, res) => {
  const session = await db.startSession();
  let showId = req.params.id;
  await dbqueries_showdetails.deleteShowDetailsById(session, showId)
  .then(result => {
    res.status(200).send(result);
  })
  .catch(error => {
    res.status(400).send(error);
  });
  session.endSession();
});


// queries for movieinfo collection to read and write
router.route("/getMovieInfo").get(async (req, res) => {
  const session = await db.startSession();
  await dbqueries_movieinfo.findAllMoviesInfo(session)
  .then(result => {
    res.status(200).send(result);
  })
  .catch(error => {
    res.status(400).send(error);
  });
  session.endSession();
});

router.route("/getMultipleMovieInfo").get(async (req, res) => {
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

router.route("/getMovieInfo/:id").get(async (req, res) => {
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

router.route("/insertMovieInfo").post(async (req, res) => {
  const showDetailsArray = req.body.showDetailsArray;
  const session = await db.startSession();
  await dbqueries_showdetails.insertShowDetails(session, showDetailsArray)
  .then(result => {
    res.status(200).send(result);
  })
  .catch(error => {
    res.status(400).send(error);
  });
  session.endSession();
});

router.route("/updateMovieInfo/:id").post(async (req, res) => {
  const session = await db.startSession();
  session.startTransaction();
  try {
    const movieId = req.params.id;
    await dbqueries_showdetails.updateShowDetailsById(session, req.body, movieId)
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
        throw new Error("Error occurred while updating showdetails: " + error);
      });

      const { bookNowUrl, startTime, endTime, screeningDate, theaterId } = req.body;
      let showDetailsArray = new Array();

      let showdetails = new ShowDetails({
        _id: new mongoose.Types.ObjectId(),
        movieId: movieId,
          bookNowUrl: bookNowUrl,
          theaterId: theaterId,
          startTime: startTime,
          endTime: endTime,
          screeningDate: screeningDate
      });

      showDetailsArray.push(showdetails);

      await dbqueries_showdetails.insertShowDetails(session, showDetailsArray)
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
        throw new Error("Error occurred while inserting updated showdetails: " + error);
      });

    await session.commitTransaction();
    session.endSession();

    return res.status(200).json({ success: "showdetails updated with insert successfully" });

  } catch (error) {
    // If an error occurred, abort the whole transaction and
    // undo any changes that might have happened
    await session.abortTransaction();
    session.endSession();

    return res.status(400).send("updating showdetails with insert failed" + error); // Rethrow so calling function sees error
  }
});

router.route("/deleteMovieInfo/:id").post(async (req, res) => {
  const session = await db.startSession();
  let movieId = req.params.id;
  await dbqueries_showdetails.deleteShowDetailsById(session, movieId)
  .then(result => {
    res.status(200).send(result);
  })
  .catch(error => {
    res.status(400).send(error);
  });
  session.endSession();
});

// append /api for our http requests
app.use("/api", router);
// launch our backend into a port
app.listen(process.env.PORT || API_PORT, () =>
  console.log(`LISTENING ON PORT ${API_PORT}`)
);

module.exports = { app };
