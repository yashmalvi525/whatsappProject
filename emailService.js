const nodemailer = require('nodemailer');
require('dotenv').config();

async function replyToEmail(replyBody, originalEmail) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: originalEmail.from,
    subject: `Re: ${originalEmail.subject}`,
    text: replyBody,
    inReplyTo: originalEmail.messageId,
    references: originalEmail.references,
  };

  return transporter.sendMail(mailOptions);
}

module.exports = { replyToEmail };
