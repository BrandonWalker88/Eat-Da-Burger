const orm = require("../config/orm");
// Create the burger object
const burger = {
  // Select all burger table entries
  selectAll: (cb) => {
    orm.selectAll("burgers", (res) => {
      cb(res);
    });
  },

  // The variables cols and vals are arrays
  insertOne: (cols, vals, cb) => {
    orm.insertOne("burgers", cols, vals, function (res) {
      cb(res);
    });
  },

  // The objColVals is an object specifying columns as object keys with associated values
  updateOne: (objColVals, condition, cb) => {
    orm.updateOne("burgers", objColVals, condition, function (res) {
      cb(res);
    });
  },
};

module.exports = burger;
