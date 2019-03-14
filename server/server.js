const { mongoose } = require("./db/mongoose");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const multer = require("multer");

const dbqueries_theater = require("./db/dbqueries_theater");
const dbqueries_showdetails = require("./db/dbqueries_showdetails");
const dbqueries_movieinfo = require("./db/dbqueries_movieinfo");
const dbqueries_admininfo = require("./db/dbqueries_admininfo");

const MovieInfo = require("./schemas/MovieInfo");
const Theater = require("./schemas/Theater");
const ShowDetails = require("./schemas/ShowDetails");
const AdminInfo = require("./schemas/AdminInfo");

const API_PORT = 3001;
const app = express();
const router = express.Router();

const upload = multer({
  // dest: "client\\src\\Images",
  limits: {
    fileSize: 1000000
  },
  fileFilter(req, file, cb) {
    file.mimetype = file.mimetype.toLowerCase();
    if (!file.mimetype.match(/(jpg|jpeg|png)$/)) {
      return cb(new Error("Please upload an image of type jpg|jpeg|png"));
    }
    cb(undefined, true);
  }
});

app.use(cors());
// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));
app.use(express.json());

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
router.route("/getAllTheaters").get(async (req, res) => {
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
  console.log(req.body);
  let theaterArray = new Array();


    const { theaterId, theaterName, address } = req.body;
    let theater = new Theater({
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

    theaterArray.push(theater);

  await dbqueries_theater
    .insertTheater(session, theaterArray)
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
    const theaterId = req.body.theaterId;
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
    let theaterArray = new Array();

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
    theaterArray.push(theater1);

    await dbqueries_theater
      .insertTheater(session, theaterArray)
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
  let theaterId = req.body.theaterId;
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
router.route("/getAllShowDetails").get(async (req, res) => {
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

  let showDetailsArray = new Array();

  for (let i = 0; i < req.body; i++) {
    const { showId, bookNowUrl, startTime, theaterId } = req.body[
      i
    ];

    let showdetails = new ShowDetails({
      _id: new mongoose.Types.ObjectId(),
      showId: showId,
      bookNowUrl: bookNowUrl,
      theaterId: theaterId,
      startTime: startTime
    });

    showDetailsArray.push(showdetails);
  }

  await dbqueries_showdetails
    .insertShowDetails(session, showDetailsArray)
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
    const { showId, bookNowUrl, startTime, showStatus, theaterId } = req.body;

    await dbqueries_showdetails
      .updateShowDetailsById(session, req.body, showId)
      .then((resolve, reject) => {
        console.log(resolve);
      })
      .catch(error => {
        console.log(error);
        throw new Error("Error occurred while updating showdetails: " + error);
      });

    let showDetailsArray = new Array();

    let showdetails = new ShowDetails({
      _id: new mongoose.Types.ObjectId(),
      showId: showId,
      bookNowUrl: bookNowUrl,
      theaterId: theaterId,
      startTime: startTime,
      showStatus: showStatus
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
  let showId = req.body.showId;
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
      res.send(resolve);
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

router
  .route("/insertMovieInfo")
  .post(
    upload.fields([
      { name: "posterimage", maxCount: 1 },
      { name: "backdropimage", maxCount: 1 }
    ]),
    async (req, res) => {
      const session = await db.startSession();
      session.startTransaction();
      try {

        
        console.log(req.body);
        const movieInfo = JSON.parse(req.body.movieInfo);
        const showDetailsAry = JSON.parse(req.body.showDetailsArray);
        const adminId = req.body.adminId;
        console.log("movieInfo: ", movieInfo);
        console.log("adminId: ", adminId);
        console.log("showDetailsAry: ", showDetailsAry);

        let showDetailsArray = new Array();

        for (let i = 0; i < showDetailsAry; i++) {
          const {
            showId,
            bookNowUrl,
            startTime,
            showStatus,
            theaterId
          } = showDetailsAry[i];

          let showdetails = new ShowDetails({
            _id: new mongoose.Types.ObjectId(),
            showId: showId,
            bookNowUrl: bookNowUrl,
            theaterId: theaterId,
            startTime: startTime,
            showStatus: showStatus
          });

          showDetailsArray.push(showdetails);
        }

        await dbqueries_showdetails
          .insertShowDetails(session, showDetailsArray)
          .then((resolve, reject) => {
            console.log(resolve);
          })
          .catch(error => {
            console.log(error);
            throw new Error(
              "Error occurred while inserting showdetails with movieinfo: " +
                error
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
          posterimage: {
            data: req.files["posterimage"][0].buffer,
            contentType: req.files["posterimage"][0].mimetype
          },
          backdropimage: {
            data: req.files["backdropimage"][0].buffer,
            contentType: req.files["backdropimage"][0].mimetype
          },
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
            throw new Error(
              "Error occurred while inserting movieinfo: " + error
            );
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

        return res
          .status(400)
          .send("insering movieinfo with shows failed" + error); // Rethrow so calling function sees error
      }
    }
  );

router
  .route("/updateMovieInfo/:id")
  .post(
    upload.fields([
      { name: "posterimage", maxCount: 1 },
      { name: "backdropimage", maxCount: 8 }
    ]),
    async (req, res) => {
      const session = await db.startSession();
      session.startTransaction();
      try {
        const adminId = req.body.adminId;
        const movieInfo = req.body.movieInfo;
        const {
          movieId,
          movieName,
          tagline,
          synopsis,
          cast,
          trailerUrl,
          genre,
          language,
          showIds
        } = movieInfo;

        await dbqueries_movieinfo
          .updateMovieInfoById(session, movieInfo, movieId, adminId)
          .then((resolve, reject) => {
            console.log(resolve);
          })
          .catch(error => {
            console.log(error);
            throw new Error(
              "Error occurred while updating movieinfo: " + error
            );
          });

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
          posterimage: {
            data: req.files["posterimage"][0].buffer,
            contentType: req.files["posterimage"][0].mimetype
          },
          backdropimage: {
            data: req.files["backdropimage"][0].buffer,
            contentType: req.files["backdropimage"][0].mimetype
          },
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
    }
  );

router.route("/deleteMovieInfo/:id").post(async (req, res) => {
  const session = await db.startSession();
  let movieId = req.body.movieId;
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

//queries to read and write from admin
router.route("/getAllAdminsInfo").get(async (req, res) => {
  const session = await db.startSession();
  await dbqueries_admininfo
    .findAllAdmin(session)
    .then((resolve, reject) => {
      res.status(200).send(resolve);
    })
    .catch(error => {
      res.status(400).send(error);
    });
  session.endSession();
});

router.route("/getAdminInfoByUsername").get(async (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  const session = await db.startSession();
  await dbqueries_admininfo
    .findAdminByUsername(session, username, password)
    .then((resolve, reject) => {
      res.status(200).send(resolve);
    })
    .catch(error => {
      res.status(400).send(error);
    });
  session.endSession();
});

router.route("/insertAdminInfo").post(async (req, res) => {
  const session = await db.startSession();

  let adminInfoArray = new Array();

  for (let i = 0; i < req.body; i++) {
    const { adminId, username, password, organiserinfo } = req.body[i];

    let adminInfo = new AdminInfo({
      _id: new mongoose.Types.ObjectId(),
      adminId: adminId,
      username: username,
      password: password,
      organiserinfo: {
        name: organiserinfo.name,
        country: organiserinfo.country,
        city: organiserinfo.city,
        street: organiserinfo.street,
        zipcode: organiserinfo.zipcode
      }
    });

    adminInfoArray.push(adminInfo);
  }

  await dbqueries_admininfo
    .insertAdmin(session, adminInfoArray)
    .then((resolve, reject) => {
      res.status(200).send(resolve);
    })
    .catch(error => {
      res.status(400).send(error);
    });

  session.endSession();
});

router.route("/updateAdminInfo/:id").post(async (req, res) => {
  const session = await db.startSession();
  session.startTransaction();
  try {
    const adminId = req.body.adminId;
    await dbqueries_admininfo
      .updateAdminById(session, req.body, adminId)
      .then((resolve, reject) => {
        console.log(resolve);
      })
      .catch(error => {
        console.log(error);
        throw new Error("Error occurred while updating admininfo: " + error);
      });

    let adminInfoArray = new Array();

    const { username, password, organiserinfo } = req.body;

    let adminInfo = new AdminInfo({
      _id: new mongoose.Types.ObjectId(),
      adminId: adminId,
      username: username,
      password: password,
      organiserinfo: {
        name: organiserinfo.name,
        country: organiserinfo.country,
        city: organiserinfo.city,
        street: organiserinfo.street,
        zipcode: organiserinfo.zipcode
      }
    });

    adminInfoArray.push(adminInfo);

    await dbqueries_admininfo
      .insertAdmin(session, adminInfoArray)
      .then((resolve, reject) => {
        console.log(resolve);
      })
      .catch(error => {
        console.log(error);
        throw new Error(
          "Error occurred while inserting updated admininfo: " + error
        );
      });

    await session.commitTransaction();
    session.endSession();

    return res
      .status(200)
      .json({ success: "admininfo updated with insert successfully" });
  } catch (error) {
    // If an error occurred, abort the whole transaction and
    // undo any changes that might have happened
    await session.abortTransaction();
    session.endSession();

    return res
      .status(400)
      .send("updating admininfo with insert failed" + error); // Rethrow so calling function sees error
  }
});

// append /api for our http requests
app.use("/api", router);
// launch our backend into a port
app.listen(process.env.PORT || API_PORT, () =>
  console.log(`LISTENING ON PORT ${API_PORT}`)
);

module.exports = { app };
