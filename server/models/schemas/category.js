const { Schema } = require('mongoose');

// 카테고리 테이블
const categorySchema = new Schema({
  name: { type: String, required: true },

  productId: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product',
    },
  ],
  // 제품 분류(카테고리)
  // e.g. cloth:1, food:2, treats:3, toy:4, grooming:5, bad/mat:6, etc
  // category: {
  //   type: String,
  //   enum: ['cloth', 'food', 'treats', ' toy', 'grooming', 'bad/mat'],
  //   required: true,
  // },
});

module.exports = categorySchema;
