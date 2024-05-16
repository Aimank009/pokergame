const dotenv = require('dotenv');

// Load env vars if env is not production
if (process.env.NODE_ENV !== 'production') {
  dotenv.config({ path: './server/config/local.env' });
}

module.exports = {
  PORT: process.env.PORT || 5000,
  JWT_SECRET: "its me aman",
  MONGO_URI: "mongodb+srv://aiman:22124004@cluster0.0tkp8t3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  NODE_ENV: "development",
  INITIAL_CHIPS_AMOUNT: 30000,
  JWT_TOKEN_EXPIRES_IN: 3600000 * 24,
  SMTP_HOST: "smtp.gmail.com",
  SMTP_PORT: 587,
  SMTP_USER: "aimankhan78605786@gmail.com",
  SMTP_PW: "#GYGUVPU9",
  FROM_NAME: 'Vintage Poker Info',
  FROM_EMAIL: 'no-reply@vintagepoker.net',
};
