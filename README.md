

# WhatsApp Email Automation Project

This project automates email fetching and replying through WhatsApp using Twilio, imap-simple, Node.js, and JavaScript. The goal is to provide an efficient way to manage emails via WhatsApp by automating the process of fetching new emails and responding to them directly from WhatsApp.

## Features

- **Email Fetching**: Automatically fetches emails from a configured email account using the IMAP protocol.
- **WhatsApp Integration**: Sends email notifications and replies through WhatsApp using the Twilio API.
- **Email Replying**: Users can reply to emails via WhatsApp, and the system will send the response to the email sender.
- **Twilio API**: Utilizes Twilio Functions to handle WhatsApp messaging, making the system scalable and reliable.
- **IMAP Integration**: Uses the imap-simple package to interact with email servers for fetching emails.

## Tech Stack

- **Twilio**: Used for WhatsApp messaging and automation.
- **Node.js**: The backend runtime environment for handling API requests and automation logic.
- **JavaScript**: Programming language used for building the application logic.
- **imap-simple**: Node.js library for interacting with email servers via IMAP.
- **Twilio Functions**: Used for serverless backend functionality to handle WhatsApp messages.

## Setup and Installation

### Prerequisites

- Node.js (v14 or higher)
- Twilio Account (for WhatsApp API access)
- Email Account (IMAP enabled)

### Steps to Run the Project

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yashmalvi525/whatsappProject.git
   cd whatsappProject
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure your email credentials:**
   - Set up your email account's IMAP credentials in the project configuration file.

4. **Set up Twilio:**
   - Create a Twilio account and get your WhatsApp sandbox credentials.
   - Add your Twilio credentials to the environment variables or a `.env` file.

5. **Run the application:**
   ```bash
   node app.js
   ```

6. **Start interacting with WhatsApp:**
   - Once the application is running, it will fetch emails and allow you to reply via WhatsApp.

## Usage

- The system will automatically fetch unread emails from your inbox.
- Once a new email is fetched, a WhatsApp message will be sent to notify you.
- You can reply to the email by responding to the WhatsApp message, and the system will send the response to the email sender.

## Contributing

Feel free to fork the repository and submit pull requests. Contributions are welcome!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
