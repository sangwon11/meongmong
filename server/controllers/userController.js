const userService = require('../services/userService');

exports.getAllUsers = async (req, res, next) => {
  try {
    const userList = await userService.getAllUsers();
    res.json(userList);
  } catch (err) {
    next(err);
  }
};

exports.getUserById = async (req, res, next) => {
  const { id } = req.params;

  const data = await userService.getUserById(id);

  res.status(200).json({ status: 200, message: data });
};

exports.createUser = async (req, res, next) => {
  const user = req.body;

  try {
    const result = await userService.createUser({
      ...user,
      phone: parseInt(user.phone),
    });

    if (!result) {
      res.status(400).json({});
    }

    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};

exports.updateUser = async (req, res, next) => {
  const { id } = req.params;
  const { phone, name } = req.body;

  const data = await userService.updateUser(id, phone, name);

  res.status(200).json(data);
};

exports.deleteUser = async (req, res, next) => {
  const { id } = req.params;

  const data = await userService.deleteUser(id);

  res.json(data);
};
