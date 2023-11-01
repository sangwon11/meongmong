const { Schema } = require('mongoose');

// 주문 테이블
const orderSchema = new Schema({
  // 주문코드
  orderId: {
    type: Schema.Types.ObjectId,
    ref: 'OrderItem',
    required: true,
  },
  // 주문 제품 관련
  items: {
    item: [
      {
        // 제품명
        name: {
          type: Schema.Types.ObjectId,
          ref: 'Item',
          required: true,
        },
        // 주문 수량
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
    // 총 금액
    totalPrice: {
      type: Number,
      required: true,
    },
  },
  // 유저 관련
  // 유저 이메일
  email: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  // 유저 아이디
  uid: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  // 우편번호
  zipCode: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  // 주소
  address: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  // 구매날짜
  createdAt: {
    type: Date,
    default: Date.now,
  },
  // 수정날짜
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  // 배송비
  deliveryFee: {
    type: Number,
  },
  // 1: 배송전, 2: 배송중, 3: 배송완료
  status: {
    type: String,
    enum: ['배송전', '배송중', '배송완료'],
    required: true,
    default: 1,
  },
  recipient: {
    name: {
      type: String,
      required: true,
    },
    // 우편번호
    zipCode: {
      type: String,
      required: true,
    },
    // 주소
    address: {
      type: String,
      required: true,
    },
    // 전화번호
    phone: {
      type: Number,
      required: true,
    },
  },
});

module.exports = orderSchema;
