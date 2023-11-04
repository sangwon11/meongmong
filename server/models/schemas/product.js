const { Schema } = require('mongoose');

// 상품 테이블
const productSchema = new Schema(
  {
    //  제품명
    name: { type: String, required: true },
    // 제품 분류(카테고리)
    category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
    //  제품 이미지
    img_url: { type: String, required: true },
    //  제품 설명
    desc: { type: String, required: true },
    // 가격
    price: { type: Number, required: true },
    // 제품 간략설명
    summary: { type: String },
    // 할인여부
    discount: { type: Boolean },
    // 신상여부
    isNewArrival: { type: Boolean },
    // 제조사
    manufacturer: { type: String, required: true },
  },
  {
    timestamps: true,
    strictPopulate: false,
  },
);

module.exports = productSchema;
