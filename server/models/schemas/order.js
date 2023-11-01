const { Schema } = require('mongoose');

// 주문 테이블
const orderSchema = new Schema(
  {
    // 주문자 아이디
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    items: [
      {
        type: Schema.Types.ObjectId,
        ref: 'OderItem',
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
    //  // 우편번호
    // zipCode: {
    //   type: String,
    // },
    // // 주소
    // address: {
    //   type: String,
    // },
    // //
    // // 주문코드
    // orderId: {
    //   type: Number,
    //   required: true,
    //   unique: true,
    //   index: true,
    // },
    // // 주문 제품 관련
    // items: [orderItemSchema],
    // // 총 금액
    // totalPrice: {
    //   type: Number,
    //   required: true,
    // },
    // // 유저 이메일
    // user: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'User',
    //   required: true,
    // },
    // // // 배송비
    // // deliveryFee: {
    // //   type: Number,
    // // },
    // // 1: 배송전, 2: 배송중, 3: 배송완료
    // status: {
    //   type: String,
    //   enum: ['배송전', '배송중', '배송완료'],
    //   required: true,
    //   default: '배송전',
    // },
  },
  {
    timestamps: true,
  },
);

module.exports = orderSchema;
