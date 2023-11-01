const { Schema } = require('mongoose');

// 상품 테이블
const productSchema = new Schema(
  {
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
    category: {
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
      trim: true,
    },
    // 제품 간략설명
    summary: {
      type: String,
      trim: true,
    },
    // 가격
    price: {
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
    // 재고 수량
    quantity: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = productSchema;
