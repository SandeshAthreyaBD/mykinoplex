const MovieInfo = require("../schemas/MovieInfo");

module.exports = {
  findAllMoviesInfo: async (session, adminId) => {
    var output, err, res;
    await MovieInfo.find({
      adminId: adminId,
      inactivatedDateTime: 0,
      deletedDateTime: 0
    })
      .session(session)
      .then(result => {
        output = true;
        res = result;
        return result;
      })
      .catch(error => {
        output = false;
        err = error;
        return error;
      });
      return new Promise((resolve, reject) => {
      if (output) {
        resolve(res);
      } else {
        reject(err);
      }
    });
  },

  findAllActiveMoviesInfo: async session => {
    var output, res, err;
    await MovieInfo.find({
      status: { $ne: "Done" },
      inactivatedDateTime: 0,
      deletedDateTime: 0
    })
      .session(session)
      .then(result => {
        output = true;
        res = result;
        return result;
      })
      .catch(error => {
        output = false;
        err = error;
        return error;
      });
      return new Promise((resolve, reject) => {
      if (output) {
        resolve(res);
      } else {
        reject(err);
      }
    });
  },

  findMultipleMoviesInfo: async (session, movieIds) => {
    var output, res, err;
    await MovieInfo.find({
      movieId: { $in: movieIds },
      inactivatedDateTime: 0,
      deletedDateTime: 0
    })
      .session(session)
      .then(result => {
        output = true;
        res = result;
        return result;
      })
      .catch(error => {
        output = false;
        err = error;
        return error;
      });
      return new Promise((resolve, reject) => {
      if (output) {
        resolve(res);
      } else {
        reject(err);
      }
    });
  },

  findMovieInfoById: async (session, movieId) => {
    var output, res, err;
    await MovieInfo.findOne({
      movieId: movieId,
      inactivatedDateTime: 0,
      deletedDateTime: 0
    })
      .session(session)
      .then(result => {
        output = true;
        res = result;
        return result;
      })
      .catch(error => {
        output = false;
        err = error;
        return error;
      });
      return new Promise((resolve, reject) => {
      if (output) {
        resolve(res);
      } else {
        reject(err);
      }
    });
  },

  insertMovieInfo: async (session, movieInfoArray) => {
    var output, res, err;
    const opts = { session: session };

    await MovieInfo.insertMany(movieInfoArray, opts) //testing including session
      .then(result => {
        output = true;
        res = result;
        return result;
      })
      .catch(error => {
        output = false;
        err = error;
        return error;
      });
    return new Promise((resolve, reject) => {
      if (output) {
        resolve(res);
      } else {
        reject(err);
      }
    });
  },

  updateMovieInfoById: async (session, movieInfo, movieId, adminId) => {
    var output, err, res;
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
    const opts = { session: session };
    let date = new Date().valueOf();

    await MovieInfo.findOneAndUpdate(
      {
        adminId: adminId,
        movieId: movieId,
        status: { $ne: "Done" },
        inactivatedDateTime: 0,
        deletedDateTime: 0
      },
      { $set: { inactivatedDateTime: date } },
      opts
    )
      .then(result => {
        output = true;
        res = result;
        return result;
      })
      .catch(error => {
        output = false;
        err = error;
        return error;
      });
      return new Promise((resolve, reject) => {
      if (output) {
        resolve(res);
      } else {
        reject(err);
      }
    });
  },

  deleteMovieInfoById: async (session, movieId, adminId) => {
    var output, res, err;
    const opts = { session: session };
    let date = new Date().valueOf();

    await MovieInfo.updateMany(
      {
        movieId: movieId,
        adminId: adminId,
        status: { $ne: "Done" },
        deletedDateTime: 0
      },
      { $set: { deletedDateTime: date } },
      opts
    )
      .then(result => {
        output = true;
        res = result;
        return result;
      })
      .catch(error => {
        output = false;
        err = error;
        return error;
      });
      return new Promise((resolve, reject) => {
      if (output) {
        resolve(res);
      } else {
        reject(err);
      }
    });
  }
};
