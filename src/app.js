const express = require('express');
const cors = require('cors');

const router = require('./network/routes');

function createApp() { 
  const app = express();
  app.use(cors());
  app.use(express.json());

  // ADD YOUR ROUTES
  app.use('/api', router);


  return app;
}

module.exports = createApp;
