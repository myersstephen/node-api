const mongoose = require("mongoose");
const constants = require("../constants");

module.exports.formatMongoData = (data) => {
  if (Array.isArray(data)) {
    let resultList = [];
    for (let val = 0; val < data.length; val++) {
      resultList.push(data[val].toObject());
    }
    return resultList;
  }
  return data.toObject();
};

module.exports.checkObjectId = (id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error(constants.databaseMessage.INVALID_ID);
  }
};
