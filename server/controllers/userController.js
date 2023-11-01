const userService = require('../services/userService');

exports.getAllUsers = async (req, res, next) => {
  try {
    const userList = await userService.getAllUsers();
    res.json(userList);
  } catch (err) {
    next(err);
  }
};

exports.getUserById = async (req, res, next) => {};

exports.createUser = async (req, res, next) => {
  const user = req.body;

  try {
    const status = await userService.createUser({
      ...user,
      phone: parseInt(user.phone),
    });

    res.status(201).json(status);
  } catch (err) {
    next(err);
  }
};

exports.updateUser = async (req, res, next) => {};

exports.deleteUser = async (req, res, next) => {};
