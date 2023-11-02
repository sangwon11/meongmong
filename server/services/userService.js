const models = require('../models/index');

exports.getAllUsers = async () => {
  const users = await models.User.find({});
  return users;
};

exports.getUserById = async (_id) => {
  const user = await models.User.findOne({ _id });

  return user;
};

exports.createUser = async (user) => {
  // 생성하기전 db에 유저가 있는지 확인.
  const userCheck = this.getUserById(user._id);

  // 유저가 있다면 에러 메세지를 준다.
  if (!userCheck) {
    return false;
  }

  return await models.User.create(user);
};

exports.updateUser = async (_id, phone, name) => {
  try {
    const data = await models.User.updateOne({ _id }, { phone, name });
    if (!data.acknowledged) {
      return { state: 200, message: '수정 실패' };
    }
    return { state: 200, massage: '수정 성공' };
  } catch (err) {
    console.error(err);
  }
};

exports.deleteUser = async (_id) => {
  try {
    await models.User.deleteOne({ _id });

    return { state: 200, message: '탈퇴 성공' };
  } catch (err) {
    console.error(err);
  }
};
