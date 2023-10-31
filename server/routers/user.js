const { Router } = require('express');
const userController = require('../controllers/userController');

const router = Router();

// 전체 유저 조회
router.get('/users', userController.getAllUsers);

// 유저 정보 조회
router.get('/users/:id', userController.getUserById);

// 유저 생성
router.post('/users', userController.createUser);

// 유저 수정
router.put('/users/:id', userController.updateUser);

// 유저 삭제
router.delete('/users/:id', userController.deleteUser);

module.exports = router;
