//Integrate OpenAI or a simple NLP library to summarize email content.

// New File: summarizationService.js
const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config();

const openai = new OpenAIApi(new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
}));

async function summarizeEmail(content) {
  try {
    const prompt = `Summarize this email in 2-3 sentences:\n${content}`;
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt,
      max_tokens: 100,
    });
    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error("Error summarizing email:", error.message);
    return "Error summarizing email.";
  }
}

module.exports = { summarizeEmail };
