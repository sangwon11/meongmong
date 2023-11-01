const { Router } = require('express');
const orderController = require('../controllers/orderController');

const router = Router();

// 전체 주문 조회
router.get('/orders', orderController.getAllOrders);

// 주문 정보 조회
router.get('/orders/:id', orderController.getOrderById);

// 주문 생성
router.post('/orders', orderController.createOrder);

// 주문 수정
router.put('/orders/:id', orderController.updateOrder);

// 주문 삭제
router.delete('/orders/:id', orderController.deleteOrder);

module.exports = router;
