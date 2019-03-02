const Theater = require("../schemas/Theater");

module.exports = {
  findAllTheater: async session => {
    var output;
    await Theater.find({ inactivatedDateTime: 0, deletedDateTime: 0 })
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

  findTheaterById: async (session, theaterId) => {
    var output;

    await Theater.findOne({
      theaterId: theaterId,
      inactivatedDateTime: 0,
      deletedDateTime: 0
    })
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

  insertOneTheater: async (session, theater) => {
    var output;
    const { theaterId, theaterName, address } = theater;
    const opts = { session: session };

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

    await Theater.create(theater1, opts) //testing including session
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

    await Theater.findOneAndUpdate(
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

    await Theater.updateMany(
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
