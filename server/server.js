const axios = require("axios");
const { mongoose } = require("./db/mongoose");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const multer = require("multer");

const dbqueries_theater = require("./db/dbqueries_theater");
const dbqueries_showdetails = require("./db/dbqueries_showdetails");
const dbqueries_movieinfo = require("./db/dbqueries_movieinfo");

const MovieInfo = require("./schemas/MovieInfo");
const Theater = require("./schemas/Theater");
const ShowDetails = require("./schemas/ShowDetails");

const API_PORT = 3001;
const app = express();
const router = express.Router();

const upload = multer({
  limits: {
    fileSize: 1000000
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return cb(new Error("Please upload an image"));
    }

    cb(undefined, true);
  }
});

router.post(
  "/newroute",
  auth,
  upload.single("image"),
  async (req, res) => {
    req.user.avatar = req.file.buffer;
    await req.user.save();
    res.send();
  },
  (error, req, res, next) => {
    res.status(400).send({ error: error.message });
  }
);

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

  db.createCollection(Theater.collection.collectionName);
  db.createCollection(ShowDetails.collection.collectionName);
  db.createCollection(MovieInfo.collection.collectionName);
});
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// queries for theater collection to read and write
router.route("/getTheater").get(async (req, res) => {
  const session = await db.startSession();
  await dbqueries_theater
    .findAllTheater(session)
    .then((resolve, reject) => {
      res.status(200).send(resolve);
    })
    .catch(error => {
      res.status(400).send(error);
    });
  session.endSession();
});

router.route("/getMultipleTheaters").get(async (req, res) => {
  const session = await db.startSession();
  await dbqueries_theater
    .findMultipleTheaters(session, req.body)
    .then((resolve, reject) => {
      res.status(200).send(resolve);
    })
    .catch(error => {
      res.status(400).send(error);
    });
  session.endSession();
});

router.route("/getTheater/:id").get(async (req, res) => {
  const session = await db.startSession();
  await dbqueries_theater
    .findTheaterById(session, req.params.id)
    .then((resolve, reject) => {
      res.status(200).send(resolve);
    })
    .catch(error => {
      res.status(400).send(error);
    });
  session.endSession();
});

router.route("/insertTheater").post(async (req, res) => {
  const session = await db.startSession();
  await dbqueries_theater
    .insertTheater(session, req.body)
    .then((resolve, reject) => {
      res.status(200).send(resolve);
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
    await dbqueries_theater
      .updateTheaterById(session, req.body, theaterId)
      .then((resolve, reject) => {
        console.log(resolve);
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
    await dbqueries_theater
      .insertTheater(session, theater1)
      .then((resolve, reject) => {
        console.log(resolve);
      })
      .catch(error => {
        console.log(error);
        throw new Error(
          "Error occurred while inserting updated theater: " + error
        );
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
  await dbqueries_theater
    .deleteTheaterById(session, theaterId)
    .then((resolve, reject) => {
      res.status(200).send(resolve);
    })
    .catch(error => {
      res.status(400).send(error);
    });
  session.endSession();
});

// queries for showdetails collection to read and write
router.route("/getShowDetails").get(async (req, res) => {
  const session = await db.startSession();
  await dbqueries_showdetails
    .findAllShowDetails(session)
    .then((resolve, reject) => {
      res.status(200).send(resolve);
    })
    .catch(error => {
      res.status(400).send(error);
    });
  session.endSession();
});

router.route("/getMultipleShowDetailsById").get(async (req, res) => {
  const session = await db.startSession();
  await dbqueries_showdetails
    .findMultipleShowDetailsById(session, req.body.showIds)
    .then((resolve, reject) => {
      res.status(200).send(resolve);
    })
    .catch(error => {
      res.status(400).send(error);
    });
  session.endSession();
});

router.route("/getMultipleShowDetailsByStatus").get(async (req, res) => {
  const session = await db.startSession();
  await dbqueries_showdetails
    .findMultipleShowDetailsByStatus(
      session,
      req.body.showIds,
      req.body.showStatus
    )
    .then((resolve, reject) => {
      res.status(200).send(resolve);
    })
    .catch(error => {
      res.status(400).send(error);
    });
  session.endSession();
});

router.route("/getShowDetails/:id").get(async (req, res) => {
  let showId = req.params.showId;
  const session = await db.startSession();
  await dbqueries_showdetails
    .findShowDetailsById(session, showId)
    .then((resolve, reject) => {
      res.status(200).send(resolve);
    })
    .catch(error => {
      res.status(400).send(error);
    });
  session.endSession();
});

router.route("/insertShowDetails").post(async (req, res) => {
  const session = await db.startSession();
  await dbqueries_showdetails
    .insertShowDetails(session, req.body)
    .then((resolve, reject) => {
      res.status(200).send(resolve);
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
    await dbqueries_showdetails
      .updateShowDetailsById(session, req.body, showId)
      .then((resolve, reject) => {
        console.log(resolve);
      })
      .catch(error => {
        console.log(error);
        throw new Error("Error occurred while updating showdetails: " + error);
      });

    const {
      bookNowUrl,
      startTime,
      endTime,
      screeningDate,
      theaterId
    } = req.body;
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

    await dbqueries_showdetails
      .insertShowDetails(session, showDetailsArray)
      .then((resolve, reject) => {
        console.log(resolve);
      })
      .catch(error => {
        console.log(error);
        throw new Error(
          "Error occurred while inserting updated showdetails: " + error
        );
      });

    await session.commitTransaction();
    session.endSession();

    return res.status(200).send("showdetails updated with insert successfully");
  } catch (error) {
    // If an error occurred, abort the whole transaction and
    // undo any changes that might have happened
    await session.abortTransaction();
    session.endSession();

    return res
      .status(400)
      .send("updating showdetails with insert failed" + error); // Rethrow so calling function sees error
  }
});

router.route("/deleteShowDetails/:id").post(async (req, res) => {
  const session = await db.startSession();
  let showId = req.params.id;
  await dbqueries_showdetails
    .deleteShowDetailsById(session, showId)
    .then((resolve, reject) => {
      res.status(200).send(resolve);
    })
    .catch(error => {
      res.status(400).send(error);
    });
  session.endSession();
});

// queries for movieinfo collection to read and write
router.route("/getAllMovieInfo").get(async (req, res) => {
  const session = await db.startSession();
  await dbqueries_movieinfo
    .findAllMoviesInfo(session)
    .then((resolve, reject) => {
      res.status(200).send(resolve);
    })
    .catch(error => {
      res.status(400).send(error);
    });
  session.endSession();
});

router.route("/getMultipleMovieInfo").get(async (req, res) => {
  const session = await db.startSession();
  await dbqueries_movieinfo
    .findMultipleMoviesInfo(session, req.body.movieIds)
    .then((resolve, reject) => {
      res.status(200).send(resolve);
    })
    .catch(error => {
      res.status(400).send(error);
    });
  session.endSession();
});

router.route("/getAllActiveMovieInfo").get(async (req, res) => {
  const session = await db.startSession();
  await dbqueries_movieinfo
    .findAllActiveMoviesInfo(session)
    .then((resolve, reject) => {
      res.status(200).send(resolve);
    })
    .catch(error => {
      res.status(400).send(error);
    });
  session.endSession();
});

router.route("/getMovieInfo/:id").get(async (req, res) => {
  let movieId = req.params.id;
  const session = await db.startSession();
  await dbqueries_movieinfo
    .findMovieInfoById(session, movieId)
    .then((resolve, reject) => {
      res.status(200).send(resolve);
    })
    .catch(error => {
      res.status(400).send(error);
    });
  session.endSession();
});

router.route("/insertMovieInfo").post(async (req, res) => {
  const session = await db.startSession();
  session.startTransaction();
  try {
    const movieInfo = req.body.movieInfo;
    const showDetailsArray = req.body.showDetailsArray;
    const adminId = req.body.adminId;

    await dbqueries_showdetails
      .insertShowDetails(session, showDetailsArray)
      .then((resolve, reject) => {
        console.log(resolve);
      })
      .catch(error => {
        console.log(error);
        throw new Error(
          "Error occurred while inserting showdetails with movieinfo: " + error
        );
      });

    let movieInfoArray = new Array();

    let movieInfo1 = new MovieInfo({
      _id: new mongoose.Types.ObjectId(),
      movieId: movieInfo.movieId,
      movieName: movieInfo.movieName,
      tagline: movieInfo.tagline,
      synopsis: movieInfo.synopsis,
      cast: movieInfo.cast,
      trailerUrl: movieInfo.trailerUrl,
      genre: movieInfo.genre,
      posterimage: movieInfo.posterimage,
      backdropimage: movieInfo.backdropimage,
      language: movieInfo.language,
      showIds: movieInfo.showIds,
      adminId: adminId
    });

    movieInfoArray.push(movieInfo1);

    await dbqueries_movieinfo
      .insertMovieInfo(session, movieInfoArray)
      .then((resolve, reject) => {
        console.log(resolve);
      })
      .catch(error => {
        console.log(error);
        throw new Error("Error occurred while inserting movieinfo: " + error);
      });

    await session.commitTransaction();
    session.endSession();

    return res
      .status(200)
      .json({ success: "movieinfo inserted with shows successfully" });
  } catch (error) {
    // If an error occurred, abort the whole transaction and
    // undo any changes that might have happened
    await session.abortTransaction();
    session.endSession();

    return res.status(400).send("insering movieinfo with shows failed" + error); // Rethrow so calling function sees error
  }
});

router.route("/updateMovieInfo/:id").post(async (req, res) => {
  const session = await db.startSession();
  session.startTransaction();
  try {
    const movieId = req.params.id;
    const adminId = req.body.adminId;
    const movieInfo = req.body.movieInfo;
    await dbqueries_movieinfo
      .updateMovieInfoById(session, movieInfo, movieId, adminId)
      .then((resolve, reject) => {
        console.log(resolve);
      })
      .catch(error => {
        console.log(error);
        throw new Error("Error occurred while updating movieinfo: " + error);
      });

    const {
      movieName,
      tagline,
      synopsis,
      cast,
      trailerUrl,
      genre,
      posterimage,
      backdropimage,
      language,
      showIds
    } = movieInfo;

    let movieInfoArray = new Array();

    let movieInfo1 = new MovieInfo({
      _id: new mongoose.Types.ObjectId(),
      movieId: movieId,
      movieName: movieName,
      tagline: tagline,
      synopsis: synopsis,
      cast: cast,
      trailerUrl: trailerUrl,
      genre: genre,
      posterimage: posterimage,
      backdropimage: backdropimage,
      language: language,
      showIds: showIds,
      adminId: adminId
    });

    movieInfoArray.push(movieInfo1);

    await dbqueries_movieinfo
      .insertMovieInfo(session, movieInfoArray)
      .then((resolve, reject) => {
        console.log(resolve);
      })
      .catch(error => {
        console.log(error);
        throw new Error(
          "Error occurred while inserting updated movieinfo: " + error
        );
      });

    await session.commitTransaction();
    session.endSession();

    return res
      .status(200)
      .json({ success: "movieinfo updated with insert successfully" });
  } catch (error) {
    // If an error occurred, abort the whole transaction and
    // undo any changes that might have happened
    await session.abortTransaction();
    session.endSession();

    return res
      .status(400)
      .send("updating movieinfo with insert failed" + error); // Rethrow so calling function sees error
  }
});

router.route("/deleteMovieInfo/:id").post(async (req, res) => {
  const session = await db.startSession();
  let movieId = req.params.id;
  let adminId = req.body.adminId;
  await dbqueries_movieinfo
    .deleteMovieInfoById(session, movieId, adminId)
    .then((resolve, reject) => {
      res.status(200).send(resolve);
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
