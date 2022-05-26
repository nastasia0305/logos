require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const sessionConfig = require('./sessionConfig');
const corsConfig = require('./corsConfig');

const config = (app) => {
  app.disable('x-powered-by');
  app.use(express.json());
  app.use(express.urlencoded({
    extended: true,
  }));
  app.use(session(sessionConfig));
  app.use(cors());
  app.use(cors(corsConfig));
  app.use(cookieParser());
  app.use(session(sessionConfig));
}

module.exports = config;

