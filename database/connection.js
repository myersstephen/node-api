const mongoose = require("mongoose");

/**
 * Our basic database connection
 * mongoose.connect opens the default mongoose connection
 * TODO:
 */
module.exports = async () => {
  try {
    //TODO: Fix deprecation Warning -  useUnifiedTopology: true
    await mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });
    console.log("Database connected");
  } catch (err) {
    console.log("Database connection error: ", err);
    throw new Error(err);
  }
};
