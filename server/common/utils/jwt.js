const jwt = require('jsonwebtoken');
const config = require('../../config');

exports.createToken = function (email, isAdmin) {
  return jwt.sign({ email, isAdmin }, config.jwt.scretKey, {
    expiresIn: config.jwt.expiresSec,
  });
};
