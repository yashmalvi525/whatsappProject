const twilio = require('twilio');
require('dotenv').config();

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

async function sendWhatsAppMessage(message, recipient) {
  await client.messages.create({
    from: process.env.TWILIO_PHONE_NUMBER,
    to: recipient,
    body: message,
  });
}

module.exports = { sendWhatsAppMessage };
