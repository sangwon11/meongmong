require('dotenv').config();

function isRequired(key, defaultValue = undefined) {
  // process.env의 key값이 존재하지 않으면 defaultValue를 반환한다.
  const value = process.env[key] || defaultValue;

  if (value == null) {
    throw new Error(`Missing required environment variable ${key}`);
  }

  return value;
}

const config = {
  host: {
    port: isRequired('SERVER_PORT'),
  },
  db: {
    host: isRequired('MONGO_HOST'),
    user: isRequired('MONGO_USER'),
    pass: isRequired('MONGO_PASS'),
  },
  bcrypt: {
    saltRounds: isRequired('BCRYPT_SALT_ROUNDS'),
  },
  jwt: {
    scretKey: isRequired('JWT_SCRET_KEY'),
    expiresSec: isRequired('JWT_EXPIRES_SEC'),
  },
};

module.exports = config;
