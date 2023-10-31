const { Schema } = require('mongoose');

// 상품 테이블
const productSchema = new Schema({
  // 제품 코드
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  //  제품명
  name: {
    type: String,
    required: true,
  },
  // 제품 분류(카테고리)
  // e.g. cloth:1, food:2, treats:3, toy:4, grooming:5, bad/mat:6, etc
  kind: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  //  제품 이미지
  img_url: {
    type: String,
    required: true,
  },
  //  제품 설명
  desc: {
    type: String,
    required: true,
  },
  // 제품 간략설명
  summary: {
    type: String,
  },
  // 가격
  price: {
    type: Number,
    required: true,
  },
  // 재고수량
  amount: {
    type: Number,
    required: true,
  },
  // 할인여부
  discount: {
    type: Boolean,
  },
  // 신상여부
  isNewArrival: {
    type: Boolean,
  },
  // 제품 업로드 날짜
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  // 제품 업데이트 날짜
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = productSchema;
