require("dotenv").config();
const mongoose = require("mongoose");

const connectDatabase = async () => {
  // Connect to database
  try {
    const connectionString = process.env.DB_URL ;
    const value = await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    if (value) console.log("Connect DB Okay !!!");
  } catch (error) {
    console.log(
      "🚀 ~ file: connect.js ~ line 21 ~ connectDatabase ~ error",
      error
    );
  }
};

const disconnectDatabase = async () => {
  // Disconnect from database
  try {
    const value = await mongoose.connection.close();
    if (value) console.log("Disconnect DB Okay !!!");
  } catch (error) {
    console.log(
      "🚀 ~ file: connect.js ~ line 31 ~ disconnectDatabase ~ error",
      error
    );
  }
};

module.exports = {
  connectDatabase,
  disconnectDatabase,
};
