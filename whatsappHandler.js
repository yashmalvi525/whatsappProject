//THIS IS MODULE 1 
// Commands will be processed via WhatsApp using Twilio. Add a webhook to handle incoming messages and route commands like "Summarize my emails," "Reply to Mail #<id>," etc.
const express = require('express');
const bodyParser = require('body-parser');
const { fetchEmails } = require('D:/whatsappProject/fetchEmail');
const { summarizeEmail } = require('./summarizationService');
const { sendWhatsAppMessage } = require('./whatsappService');
const { replyToEmail } = require('./emailService');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/whatsapp', async (req, res) => {
  const message = req.body.Body.trim().toLowerCase();
  const senderNumber = req.body.From;

  if (message === 'summarize my emails') {
    const emails = await fetchEmails();
    const summaries = await Promise.all(emails.map(email => summarizeEmail(email.body)));
    let response = "Summarized Emails:\n";
    summaries.forEach((summary, index) => {
      response += `${index + 1}. ${summary}\n`;
    });
    await sendWhatsAppMessage(response, senderNumber);
  } else if (message.startsWith('reply to mail #')) {
    const emailId = parseInt(message.split('#')[1]);
    const emails = await fetchEmails();
    const selectedEmail = emails[emailId - 1];
    await sendWhatsAppMessage("Type your reply:", senderNumber);
    app.once("message", async (replyMessage) => {
      await replyToEmail(replyMessage.body, selectedEmail);
      await sendWhatsAppMessage("Reply sent successfully.", senderNumber);
    });
  } else {
    await sendWhatsAppMessage("Command not recognized. Type 'help' for options.", senderNumber);
  }

  res.status(200).send("OK");
});

app.listen(3000, () => {
  console.log('WhatsApp handler running on port 3000');
});
