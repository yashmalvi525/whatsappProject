const imaps = require('imap-simple');
require('dotenv').config();

const config = {
  imap: {
    user: process.env.EMAIL_USER,
    password: process.env.EMAIL_PASS,
    host: 'imap.gmail.com',
    port: 993,
    tls: true,
    tlsOptions: { rejectUnauthorized: false },
  },
};

async function fetchEmails() {
  try {
    const connection = await imaps.connect(config);
    await connection.openBox('INBOX');

    const searchCriteria = ['UNSEEN'];
    const fetchOptions = {
      bodies: ['HEADER.FIELDS (FROM TO SUBJECT DATE)', 'TEXT'],
      markSeen: false,
    };

    const messages = await connection.search(searchCriteria, fetchOptions);

    const emails = messages.map((message, index) => {
      const header = message.parts.find(part => part.which === 'HEADER.FIELDS (FROM TO SUBJECT DATE)').body;
      const body = message.parts.find(part => part.which === 'TEXT').body;
      return {
        id: index + 1,
        from: header.from ? header.from[0] : 'N/A',
        to: header.to ? header.to[0] : 'N/A',
        subject: header.subject ? header.subject[0] : 'N/A',
        date: header.date ? header.date[0] : 'N/A',
        body,
        messageId: message.attributes['x-gm-msgid'],
      };
    });

    connection.end();
    return emails;
  } catch (error) {
    console.error('Error fetching emails:', error.message);
    return [];
  }
}

module.exports = { fetchEmails };
