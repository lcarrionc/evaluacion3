const express = require('express');
require('dotenv').config();
const sequelize = require('./config/database');
const productsRouter = require('./routes/products');
const logger = require('./middlewares/logger');
const errorHandler = require('./middlewares/errorHandler');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(logger);
app.use(cors({ origin: '*' }));

app.use('/api/products', productsRouter);

app.use(errorHandler);

// conectar DB
async function initDb() {
  await sequelize.authenticate();
  await sequelize.sync(); 
}

module.exports = { app, initDb };
