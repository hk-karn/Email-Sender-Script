require('dotenv').config();
const { sendEmailsSynchronously } = require('./src/emailSender');

sendEmailsSynchronously();
