const AdminInfo = require("../schemas/AdminInfo");

module.exports = {
  findAllAdmin: async session => {
    var output, res, err;
    await AdminInfo.find({ inactivatedDateTime: 0, deletedDateTime: 0 })
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

  findAdminByUsername: async (session, username, password) => {
    var output, res, err;

    await AdminInfo.findOne({
      username: username,
      password: password,
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

  insertAdmin: async (session, adminArray) => {
    var output, res, err;
    const opts = { session, new: true };

    await AdminInfo.insertMany(adminArray, opts) //testing including session
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

  updateAdminById: async (session, admin, adminId) => {
    var output, res, err;
    const { username, password } = admin;
    const opts = { session, new: true };
    let date = new Date().valueOf();

    await AdminInfo.findOneAndUpdate(
        { adminId: adminId, inactivatedDateTime: 0, deletedDateTime: 0 },
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
  }
}
