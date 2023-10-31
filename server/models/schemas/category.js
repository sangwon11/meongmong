const { Schema } = require('mongoose');

// 카테고리 테이블
const categorySchema = new Schema({
  // 유저 이메일
  orderEmail: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  // 제품 분류(카테고리)
  // e.g. cloth:1, food:2, treats:3, toy:4, grooming:5, bad/mat:6, etc
  kind: {
    type: Number,
    required: true,
  },
});

module.exports = categorySchema;
