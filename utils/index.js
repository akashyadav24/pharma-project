const hashPayload = require('./hashPayload');
const sendResponse = require('./sendResponse');
const handleCustomError = require('./handleCustomErrors');
const {
  createAccessToken,
  decryptAccessToken,
  createaRefreshToken,
  decryptRefreshToken,
} = require('./encryption');
const logger = require('./logger');
const  ErrorLogger = require('./ErrorLogger');
module.exports = {
  hashPayload,
  sendResponse,
  handleCustomError,
  jwt: {
    createAccessToken,
    decryptAccessToken,
    createaRefreshToken,
    decryptRefreshToken,
  },
  logger,
  ErrorLogger,
};
