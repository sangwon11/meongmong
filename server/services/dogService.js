const models = require('../models/index');

exports.getAllDogs = async () => {
  return await models.Dog.find({});
};

exports.getDogById = async (id) => {
  try {
    const dog = await models.Dog.findOne({ id });

    if (dog === null) {
      const error = {
        status: 400,
        message: '해당하는 강아지를 찾을 수 없습니다.',
      };
      return error;
    }

    return dog;
  } catch (err) {
    throw new Error('서버 오류 입니다.');
  }
};

exports.createDog = async (dog) => {
  const res = await models.Dog.create(dog);
  return res;
};

exports.updateDog = async (id, dog) => {
  try {
    const res = await models.Dog.updateOne({ id }, { ...dog });
    return res;
  } catch (error) {
    throw new Error('업데이트 할 수 없습니다.');
  }
};

exports.deleteDog = async (id) => {
  try {
    const res = await models.Dog.deleteOne({ id });
    return res;
  } catch (err) {
    throw new Error('삭제 할 수 없습니다.');
  }
};
