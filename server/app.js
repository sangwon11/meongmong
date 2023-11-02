const express = require('express');
const config = require('./config');

const productRouter = require('./routers/product');
const userRouter = require('./routers/user');
const orderRouter = require('./routers/order');
const dogRouter = require('./routers/dog');
const gategoryRouter = require('./routers/category');

const connectDB = require('./db/mongoose');

const app = express();

// 데이터베이스 연결
connectDB();

// request body를 json 형태로 파싱해준다.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 정적파일 연결
app.use(express.static(__dirname + '/views/home'));

app.use('/api/v1', productRouter);
app.use('/api/v1', userRouter);
app.use('/api/v1', orderRouter);
app.use('/api/v1', dogRouter);
app.use('/api/v1', gategoryRouter);

app.get('/', (req, res) => {
  res.send('hello pm2 wow');
});

// 에러 핸들러 추가
app.use((err, req, res, next) => {
  console.log('에러 핸들러 함수입니다.');
  res.json({
    status: 404,
    message: err && err.message,
  });
});

app.listen(config.host.port, () => {
  console.log(`Example app listening on port ${config.host.port}!`);
});
