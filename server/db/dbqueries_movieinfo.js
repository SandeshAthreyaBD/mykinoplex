const MovieInfo = require("../schemas/MovieInfo");

module.exports = {
  findAllMovieInfo: async session => {
    var output;
    await MovieInfo.find({ inactivatedDateTime: 0, deletedDateTime: 0 })
      .session(session)
      .then(result => {
        output = result;
        return result;
      })
      .catch(error => {
        output = error;
        return error;
      });
    return output;
  },

  findMultipleMovieInfo: async (session, movieIds) => {
    var output;
    await MovieInfo.find({ showId: { $in: showIds }, inactivatedDateTime: 0, deletedDateTime: 0 })
      .session(session)
      .then(result => {
        output = result;
        return result;
      })
      .catch(error => {
        output = error;
        return error;
      });
    return output;
  },

  findMovieInfoById: async (session, movieId) => {
    var output;
    await MovieInfo.findOne({showId: showId, inactivatedDateTime: 0, deletedDateTime: 0 })
      .session(session)
      .then(result => {
        output = result;
        return result;
      })
      .catch(error => {
        output = error;
        return error;
      });
    return output;
  },

  insertMovieInfo: async (session, showDetailsArray) => {
    var output;
    const opts = { session: session };

    await MovieInfo.insertMany(showDetailsArray, opts) //testing including session
      .then(result => {
        output = result;
        return result;
      })
      .catch(error => {
        output = error;
        return error;
      });
    return output;
  },

  updateMovieInfoById: async (session, showDetails, movieId) => {
    var output;
    const { bookNowUrl, startTime, endTime, screeningDate, theaterId } = showDetails;
    const opts = { session: session };
    let date = new Date().valueOf();

    await MovieInfo.findOneAndUpdate(
        { showId: showId, inactivatedDateTime: 0, deletedDateTime: 0 },
        { $set: { inactivatedDateTime: date } },
        opts
        )
      .then(result => {
        output = result;
        return result;
      })
      .catch(error => {
        output = error;
        return error;
      });

    return output;
  },

  deleteMovieInfoById: async (session, movieId) => {
    var output;
    const opts = { session: session };
    let date = new Date().valueOf();

    await MovieInfo.updateMany(
        { showId: showId, deletedDateTime: 0 },
        { $set: { deletedDateTime: date } },
        opts
        )
      .then(result => {
        output = result;
        return result;
      })
      .catch(error => {
        output = error;
        return error;
      });

    return output;
  }

}
