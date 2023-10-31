const { Schema } = require('mongoose');

// 주문 품목 테이블
const orderItemSchema = new Schema({
  // 주문코드
  orderId: {
    type: Number,
    required: true,
    unique: true,
  },
  items: {
    // 제품코드
    id: {
      type: Schema.Types.ObjectId,
      ref: 'Item',
      required: true,
    },
    // 제품명
    name: {
      type: Schema.Types.ObjectId,
      ref: 'Item',
      required: true,
    },
    // 할인여부
    discount: {
      type: Schema.Types.ObjectId,
      ref: 'Item',
    },
    // 신상여부
    new: {
      type: Schema.Types.ObjectId,
      ref: 'Item',
    },
  },
  // 수량
  quantity: {
    type: Number,
    required: true,
  },
});

module.exports = orderItemSchema;
