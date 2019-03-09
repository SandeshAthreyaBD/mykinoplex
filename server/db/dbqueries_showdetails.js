const ShowDetails = require("../schemas/ShowDetails");

module.exports = {
  findAllShowDetails: async session => {
    var output, res, err;
    await ShowDetails.find({ inactivatedDateTime: 0, deletedDateTime: 0 })
      .session(session)
      .then(result => {
        output = true;
        res = result
        return result;
      })
      .catch(error => {
        output = false;
        err = error;
        return error;
      });
      return new Promise((resolve, reject) => {
        if(output) {
          resolve(res);
        } else {
          reject(err);
        }
      });
  },

  findMultipleShowDetailsById: async (session, showIds) => {
    var output, res, err;
    await ShowDetails.find({
      showId: { $in: showIds },
      inactivatedDateTime: 0,
      deletedDateTime: 0
    })
      .session(session)
      .then(result => {
        output = true;
        res = result
        return result;
      })
      .catch(error => {
        output = false;
        err = error;
        return error;
      });
      return new Promise((resolve, reject) => {
        if(output) {
          resolve(res);
        } else {
          reject(err);
        }
      });
  },

  findMultipleShowDetailsByStatus: async (session, showIds, showStatus) => {
    var output, err, res;
    await ShowDetails.find({
      showId: { $in: showIds },
      showStatus: { $in: showStatus },
      inactivatedDateTime: 0,
      deletedDateTime: 0
    })
      .session(session)
      .then(result => {
        output = true;
        res = result
        return result;
      })
      .catch(error => {
        output = false;
        err = error;
        return error;
      });
      return new Promise((resolve, reject) => {
        if(output) {
          resolve(res);
        } else {
          reject(err);
        }
      });
  },

  findShowDetailsById: async (session, showId) => {
    var output, res, err;
    await ShowDetails.findOne({
      showId: showId,
      inactivatedDateTime: 0,
      deletedDateTime: 0
    })
      .session(session)
      .then(result => {
        output = true;
        res = result
        return result;
      })
      .catch(error => {
        output = false;
        err = error;
        return error;
      });
      return new Promise((resolve, reject) => {
        if(output) {
          resolve(res);
        } else {
          reject(err);
        }
      });
  },

  insertShowDetails: async (session, showDetailsArray) => {
    var output, res, err;
    const opts = { session, new: true };
    await ShowDetails.insertMany(showDetailsArray, opts) //testing including session
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
      if(output) {
        resolve(res);
      } else {
        reject(err);
      }
    });
  },

  updateShowDetailsById: async (session, showDetails, showId) => {
    var output, res, err;
    const {
      bookNowUrl,
      startTime,
      showStatus,
      theaterId
    } = showDetails;
    const opts = { session, new: true };
    let date = new Date().valueOf();

    await ShowDetails.findOneAndUpdate(
      { showId: showId, showStatus: "Now Showing", inactivatedDateTime: 0, deletedDateTime: 0 },
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
        if(output) {
          resolve(res);
        } else {
          reject(err);
        }
      });
  },

  deleteShowDetailsById: async (session, showId) => {
    var output, res, err;
    const opts = { session, new: true };
    let date = new Date().valueOf();

    await ShowDetails.updateMany(
      { showId: showId, showStatus: "Now Showing", deletedDateTime: 0 },
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
        if(output) {
          resolve(res);
        } else {
          reject(err);
        }
      });
  }
};
