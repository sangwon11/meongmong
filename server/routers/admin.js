const { Router } = require('express');
const orderController = require('../controllers/orderController');
const { isAdmin } = require('../middleware/isAdmin');

const router = Router();

// 관리자의 모든 유저 주문 조회
router.get('/admins/orders', isAdmin, orderController.getAllOrders);

// 관리자의 유저 주문 조회
router.get('/admins/orders/:userId', isAdmin, orderController.getAllOrdersById);

// 관리자의 유저 특정 주문 조회
router.get(
  '/admins/orders/:userId/:id',
  isAdmin,
  orderController.getOneOrderById,
);

// 관리자의 유저 주문 수정
router.put('/admins/orders/:userId/:id', isAdmin, orderController.updateOrder);

// 관리자의 유저 주문 삭제
router.delete('/admins/orders/:userId', isAdmin, orderController.deleteAllOrder);

// 관리자의 유저 특정 주문 삭제
router.delete(
  '/admins/orders/:userId/:id',
  isAdmin,
  orderController.deleteOneOrder,
);

module.exports = router;
