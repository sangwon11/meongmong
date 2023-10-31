const { Router } = require('express');
const dogController = require('../controllers/dogController');

const router = Router();

// 전체 강아지 조회
router.get('/dogs', dogController.getAllDogs);

// 강아지 정보 조회
router.get('/dogs/:id', dogController.getDogById);

// 강아지 생성
router.post('/dogs', dogController.createDog);

// 강아지 수정
router.put('/dogs/:id', dogController.updateDog);

// 강아지 삭제
router.delete('/dogs/:id', dogController.deleteDog);

module.exports = router;
