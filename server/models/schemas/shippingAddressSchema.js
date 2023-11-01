const { Schema } = require('mongoose');
const shippingAddressSchema = new Schema({
  // 수령자
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
    match: /^\d{3}-\d{3,4}-\d{4}$/,
  },
});

module.exports = shippingAddressSchema;
