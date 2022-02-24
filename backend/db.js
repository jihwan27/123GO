const mongoose = require('mongoose');
const credentials = require('./credentials')
// const env = process.env.NODE_ENV || "development"
const { connectionString } = credentials.mongo;

if (!connectionString) {
  console.error('Mongo DB connection string missing!');
  process.exit(1);
};

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', error => {
  console.error(`MongoDB error: ${error.message}`);
  process.exit(1);
});
db.once('open', () => console.log('MongoDB connection established.'));

// Add user.
const User = require('./models/user');
module.exports = {
  addUser: async (name) => {
    const user = new User({
      name: name
    });
    await db.collection('user').insertOne(user);
  }
};