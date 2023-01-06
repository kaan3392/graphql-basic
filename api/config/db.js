const mongoose = require("mongoose");

const connectDB = () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("DB Connection Successful");
    })
    .catch((err) => console.error(err));
};

module.exports = connectDB;