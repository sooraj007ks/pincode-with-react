const mongoose = require('mongoose');
const keys = require('../config/keys');

mongoose.connect(keys.MONGO_URI);

mongoose.connection.on('connected', () => {
  console.log('MongoDB Connected Successfully.');
});

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected');
});

mongoose.connection.on('error', err => {
  console.log(`MongoDB Error: ${err}`);
});


process.on('SIGINT', () => {
  mongoose.connection.close()
      .then(() => {
          console.log('MongoDB disconnected (SIGINT)');
          process.exit(0);
      });
});

// For Heroku
process.on('SIGTERM', () => {
  mongoose.connection.close()
      .then(() => {
          console.log('MongoDB disconnected (SIGTERM)');
          process.exit(0);
      });
});

// For Nodemon
process.on('SIGUSR2', () => {
  mongoose.connection.close()
      .then(() => {
          console.log('MongoDB disconnected (SIGUSR2)');
          process.kill(process.pid, 'SIGUSR2');
      });
});

require('../models/pin.model');