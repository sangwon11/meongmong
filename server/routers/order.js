const { Router } = require('express');
const orderController = require('../controllers/orderController');

const router = Router();

// 전체 유저 조회
router.get('/orders', orderController.getAllOrders);

// 유저 정보 조회
router.get('/orders/:id', orderController.getOrderById);

// 유저 생성
router.post('/orders', orderController.createOrder);

// 유저 수정
router.put('/orders/:id', orderController.updateOrder);

// 유저 삭제
router.delete('/orders/:id', orderController.deleteOrder);

module.exports = router;
