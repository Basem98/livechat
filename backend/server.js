const express = require('express');
const config = require('./config/envConfig');

const server = express();


server.listen(config.APP.PORT, () => {
  console.log(`Server is listening on port ${config.APP.PORT}`);
})