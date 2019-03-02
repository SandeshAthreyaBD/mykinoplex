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

  insertShowDetails: async (session, showDetailsArray) => {
    var output;
    const opts = { session, new: true };

    await ShowDetails.insertMany(showDetailsArray, opts) //testing including session
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

  updateShowDetailsById: async (session, showDetails, showId) => {
    var output;
    const { bookNowUrl, startTime, endTime, screeningDate, theaterId } = showDetails;
    const opts = { session, new: true };
    let date = new Date().valueOf();

    await ShowDetails.findOneAndUpdate(
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

  deleteShowDetailsById: async (session, showId) => {
    var output;
    const opts = { session, new: true };
    let date = new Date().valueOf();

    await ShowDetails.updateMany(
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
