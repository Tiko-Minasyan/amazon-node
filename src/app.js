require('dotenv').config({
    path: '.env'
});
require('./db-connection');
const express = require('express');
const app = express();

// export default app;
module.exports = app;