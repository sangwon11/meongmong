const models = require('../models/index');

exports.getAllUsers = async () => {
  return await models.User.find({});
};

exports.getUserById = async (id) => {};

exports.createUser = async (user) => {
  return await models.User.create(user);
};

exports.updateUser = async (id, user) => {};

exports.deleteUser = async (id) => {};
