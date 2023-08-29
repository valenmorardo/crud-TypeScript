import dotenv from 'dotenv';

dotenv.config();

const env = {
  PORT: process.env.PORT,
  DB_NAME: process.env.DB_NAME,
  USERNAME_DB: process.env.USERNAME_DB,
  PASSWORD_DB: process.env.PASSWORD_DB,
  HOST: process.env.HOST,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN
  
};

export default env;