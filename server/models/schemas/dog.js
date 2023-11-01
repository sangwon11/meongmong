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
    enum: ['초소형견', '소형견', '중형견', '대형견', '초대형견'],
    required: true,
    default: '소형견',
  },
  // 나이
  age: {
    type: Number,
    required: true,
  },
});

module.exports = dogSchema;
