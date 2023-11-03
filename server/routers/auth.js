const { Router } = require('express');
const authController = require('../controllers/authController');

const router = Router();

// 회원가입
router.post('/auth/signup', authController.signup);

// 로그인
router.post('/auth/login', authController.login);

module.exports = router;
