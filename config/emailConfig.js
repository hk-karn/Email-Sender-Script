const nodemailer = require('nodemailer');

const newTransporter = () => {
  return nodemailer.createTransport({
    pool: true,
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER, // Loaded from .env
      pass: process.env.EMAIL_PASS, // Loaded from .env
    },
  });
};

module.exports = newTransporter;
