const ShowDetails = require("../schemas/ShowDetails");

module.exports = {
  findAllShowDetails: async session => {
    var output;
    await ShowDetails.find({ inactivatedDateTime: 0, deletedDateTime: 0 })
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

  findMultipleShowDetails: async (session, showIds) => {
    var output;
    await ShowDetails.find({ showId: { $in: showIds }, inactivatedDateTime: 0, deletedDateTime: 0 })
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

  findShowDetailsById: async (session, showId) => {
    var output;
    await ShowDetails.findOne({showId: showId, inactivatedDateTime: 0, deletedDateTime: 0 })
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

  insertOneShowDetail: async (session, showDetails) => {
    var output;
    const { showId, bookNowUrl, startTime, endTime, screeningDate, theaterId } = showDetails;
    const opts = { session: session };

      let showDetails1 = new ShowDetails({
        _id: new mongoose.Types.ObjectId(),
        showId: showId,
        bookNowUrl: bookNowUrl,
        theaterId: theaterId,
        startTime: startTime,
        endTime: endTime,
        screeningDate: screeningDate
      });

    await ShowDetails.create(showDetails1, opts) //testing including session
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

  updateTheaterById: async (session, theater, theaterId) => {
    var output;
    const { theaterName, address } = theater;
    const opts = { session: session };
    let date = new Date().valueOf();

    await ShowDetails.findOneAndUpdate(
        { theaterId: theaterId, inactivatedDateTime: 0, deletedDateTime: 0 },
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

  deleteTheaterById: async (session, theaterId) => {
    var output;
    const opts = { session: session };
    let date = new Date().valueOf();

    await ShowDetails.updateMany(
        { theaterId: theaterId, deletedDateTime: 0 },
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
