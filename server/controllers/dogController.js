const dogService = require('../services/dogService');

exports.getAllDogs = async (req, res, next) => {
  try {
    const dogList = await dogService.getAllDogs();
    res.json({
      status: 200,
      dogList,
    });
  } catch (err) {
    next(err);
  }
};

exports.getDogById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const dog = await dogService.getDogById(id);
    res.json({
      status: 200,
      dog,
    });
  } catch (err) {
    next(err);
  }
};

exports.createDog = async (req, res, next) => {
  const dog = await req.body;
  try {
    await dogService.createDog(dog);
    res.status(200).json({
      status: 200,
      message: '등록 성공',
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: '서버 오류 입니다.',
    });
  }
};

exports.updateDog = async (req, res, next) => {
  const { id } = req.params;
  const { name, age, size } = req.body;

  await dogService.updateDog(id, { name, age, size });

  try {
    res.json({
      status: 200,
      message: '수정 성공',
    });
  } catch (err) {
    next(err);
  }
};

exports.deleteDog = async (req, res, next) => {
  const { id } = req.params;

  await dogService.deleteDog(id);

  try {
    res.json({
      status: 200,
      message: '삭제 성공',
    });
  } catch (err) {
    next(err);
  }
};
