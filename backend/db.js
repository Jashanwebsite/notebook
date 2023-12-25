const mongoose = require('mongoose');
require("dotenv").config()
const mongoURI = process.env.MongoUri
const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('Connected to Mongo Successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
};

module.exports = connectToMongo;

