const { Schema } = require('mongoose');

// 주문 품목 테이블
const orderItemSchema = new Schema({
  // 주문코드
  order: {
    type: Schema.Types.ObjectId,
    ref: 'Order',
    required: true,
  },
  product: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product',
      required: true,
    },
  ],

  // 제품코드
  // id: {
  //   type: String,
  //   required: true,
  // },
  // name: {
  //   type: String,
  //   required: true,
  // },
  // // 할인여부
  // discount: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'Product',
  // },
  // // 신상여부
  // new: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'Product',
  // },
  // 수량
  quantity: {
    type: Number,
    required: true,
  },
});

module.exports = orderItemSchema;
