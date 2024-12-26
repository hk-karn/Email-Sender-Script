const newTransporter = require('../config/emailConfig');
const { getDataFromExcel } = require('./dataReader');
const { createEmailTemplate } = require('./emailTemplate');
const { delay } = require('./utils');
const transporter = newTransporter();

const sendEmail = async (row) => {
  const mailOptions = {
    from: `${process.env.EMAIL_NAME} <${process.env.EMAIL_USER}>`,
    to: row.Email,
    subject: `Request for an Interview Opportunity - ${row.Role} at ${row.Company}`,
    html: createEmailTemplate(row),
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent to', row.Email);
  } catch (error) {
    console.error('Error sending email:', row.Email, error);
  }
};

const sendEmailsSynchronously = async () => {
  const data = getDataFromExcel();
  for (const row of data) {
    await sendEmail(row);
    await delay(Math.random() * 90000); // Pause between emails
  }
  console.log('All emails sent.');
};

module.exports = { sendEmailsSynchronously };
