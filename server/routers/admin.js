const { Router } = require('express');
const orderController = require('../controllers/orderController');
const { isAdmin } = require('../middleware/isAdmin');

const router = Router();

// 관리자의 모든 유저 주문 조회
router.get('/admin/orders', isAdmin, orderController.getAllOrders);

// 관리자의 유저 주문 조회
router.get('/admin/orders/:userId', isAdmin, orderController.getAllOrdersById);

// 관리자의 유저 특정 주문 조회
router.get(
  '/admin/orders/:userId/:id',
  isAdmin,
  orderController.getOneOrderById,
);

// 관리자의 유저 주문 수정
router.put('/admin/orders/:userId/:id', isAdmin, orderController.updateOrder);

// 관리자의 유저 주문 삭제
router.delete('/admin/orders/:id', isAdmin, orderController.deleteAllOrder);

// 관리자의 유저 특정 주문 삭제
router.delete(
  '/admin/orders/:userId/:id',
  isAdmin,
  orderController.deleteOneOrder,
);

module.exports = router;
