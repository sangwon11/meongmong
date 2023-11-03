const { Router } = require('express');
const authController = require('../controllers/authController');
const { isAuth } = require('../middleware/isAuth');

const router = Router();

// 회원가입
router.post('/auth/signup', authController.signup);

// 로그인
router.post('/auth/login', authController.login);

// 로그인 아웃
router.post('/auth/logout', isAuth, authController.logout);

module.exports = router;
