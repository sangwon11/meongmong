const { Schema } = require('mongoose');

// 반려견 테이블
const dogSchema = new Schema({
  // 강아지 등록 고유 아이디
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  // 강아지 이름
  name: {
    type: String,
    required: true,
  },
  // 대, 중, 소형견
  size: {
    type: String,
    required: true,
  },
  // 나이
  age: {
    type: Number,
    required: true,
  },
});

module.exports = dogSchema;
