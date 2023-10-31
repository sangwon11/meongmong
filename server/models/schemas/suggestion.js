const { Schema } = require('mongoose');

// 추천 테이블
const suggestionSchema = new Schema({
  // 제품코드
  ItemId: {
    type: Schema.Types.ObjectId,
    ref: 'Item',
    required: true,
  },
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
});

module.exports = suggestionSchema;
