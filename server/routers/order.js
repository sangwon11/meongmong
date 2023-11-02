const { Router } = require('express');
const orderController = require('../controllers/orderController');

const router = Router();

// 모든 주문 조회
router.get('/orders', orderController.getAllOrders);

// 유저의 전체 주문 조회
router.get('/orders/:userId', orderController.getAllOrdersById);

// 유저의 특정 주문 조회
router.get('/orders/:userId/:id', orderController.getOneOrderById);

// 주문 생성
router.post('/orders', orderController.createOrder);

// 주문 수정
router.put('/orders/:userId/:id', orderController.updateOrder);

// 전체 주문 삭제
router.delete('/orders/:userId', orderController.deleteAllOrder);

// 특정 주문 삭제
router.delete('/orders/:userId/:id', orderController.deleteOneOrder);

module.exports = router;
