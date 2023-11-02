const { Schema } = require('mongoose');

// 주문 테이블
const orderSchema = new Schema(
  {
    // 주문 코드
    id: {
      type: Number,
      required: true,
      unique: true,
    },
    // 주문 총 금액
    totalPrice: {
      type: Number,
      required: true,
    },
    // 주문자 아이디
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    products: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: 'Product',
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
    totalPrice: {
      type: Number,
      required: true,
    },
    shippingAddress: {
      type: Schema.Types.ObjectId,
      ref: 'ShippingAddress',
    },
  },
  {
    timestamps: true,
  },
);
module.exports = orderSchema;
