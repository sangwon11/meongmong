const { Schema } = require('mongoose');

// 추천 테이블
const suggestionSchema = new Schema({
  // 재품코드
  ItemId: {
    type: Schema.Types.ObjectId,
    ref: 'Item',
    required: true,
  },
  // 유저이메일
  email: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

module.exports = suggestionSchema;
