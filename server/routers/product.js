const { Router } = require('express');
const productController = require('../controllers/productController');

const router = Router();

// 전체 상품 조회
router.get('/product', productController.getAllProducts);

// 상품 상세 조회
router.get('/product/:id', productController.getProductByID);

// 상품 생성
router.post('/product', productController.createProduct);

// 상품 수정
router.put('/product/:id', productController.updateProduct);

// 상품 삭제
router.delete('/product/:id', productController.deleteProduct);

module.exports = router;
