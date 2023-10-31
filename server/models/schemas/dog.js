const { Schema } = require('mongoose');

// 반려견 테이블
const dogSchema = new Schema({
  species: {
    // 견종
    breed: {
      type: String,
      required: true,
    },
    // 대, 중, 소형견
    size: {
      type: String,
      required: true,
    },
  },
  // 나이
  age: {
    type: Number,
    required: true,
  },
});

module.exports = dogSchema;
