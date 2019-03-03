const Theater = require("../schemas/Theater");

module.exports = {
  findAllTheater: async session => {
    var output, res, err;
    await Theater.find({ inactivatedDateTime: 0, deletedDateTime: 0 })
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

  findMultipleTheaters: async (session, theaterIds) => {
    var output, res, err;
    await Theater.find({
      theaterId: { $in: theaterIds },
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

  findTheaterById: async (session, theaterId) => {
    var output, res, err;

    await Theater.findOne({
      theaterId: theaterId,
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

  insertTheater: async (session, theaterArray) => {
    var output, res, err;
    const opts = { session, new: true };

    await Theater.insertMany(theaterArray, opts) //testing including session
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

  updateTheaterById: async (session, theater, theaterId) => {
    var output, res, err;
    const { theaterName, address } = theater;
    const opts = { session, new: true };
    let date = new Date().valueOf();

    await Theater.findOneAndUpdate(
        { theaterId: theaterId, inactivatedDateTime: 0, deletedDateTime: 0 },
        { $set: { inactivatedDateTime: date } },
        opts
        )
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

  deleteTheaterById: async (session, theaterId) => {
    var output,res, err;
    const opts = { session: session };
    let date = new Date().valueOf();

    await Theater.updateMany(
        { theaterId: theaterId, deletedDateTime: 0 },
        { $set: { deletedDateTime: date } },
        opts
        )
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
  }

}
