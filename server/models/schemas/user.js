const { Schema } = require('mongoose');

// 유저 테이블
const userSchema = new Schema(
  {
    // 유저 이메일
    email: {
      type: String,
      required: true,
      unique: true,
    },
    // 아이디
    uid: {
      type: String,
      required: true,
      unique: true,
    },
    // 비밀번호
    password: {
      type: String,
      required: true,
    },
    // 전화번호
    phone: {
      type: Number,
      required: true,
      match: /^\d{3}-\d{3,4}-\d{4}$/,
    },
    // 회원탈퇴 여부
    useyn: {
      type: Boolean,
      required: true,
    },
    // 유저 이름
    name: {
      type: String,
      required: true,
    },
    // 관리자 여부
    isAdmin: {
      type: Boolean,
      default: false,
      required: true,
    },
    // 우편번호
    zipCode: {
      type: String,
    },
    // 주소
    address: {
      type: String,
    },
    // 
    // shippingAddress: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: 'ShippingAddressSchema',
    //   },
    // ],
    // // 
    // shippingAddress: [ShippingAddressSchema],
  },
  {
    timestamps: true,
  },
);

module.exports = userSchema;
