const dotenv = require("dotenv");
dotenv.config();
const axios = require("axios");

exports.summaryController = async (req, res) => {
  try {
    const { text } = req.body;
    const response = await axios({
      url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GEMINI_API_TOKEN}`,
      method: "post",
      data: {
        contents: [{ parts: [{ text: `summarize the below text \n ${text}` }] }],
      },
    });

    const summary = response.data.candidates[0].content.parts[0].text;
    console.log(summary);
    return res.status(200).json({ summary });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: err.message,
    });
  }
};
exports.paraController = async (req, res) => {
  try {
    const { text } = req.body;
    const response = await axios({
      url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GEMINI_API_TOKEN}`,
      method: "post",
      data: {
        contents: [{ parts: [{ text: `Write a detailed paragraph based on  \n ${text}` }] }],
      },
    });

    const summary = response.data.candidates[0].content.parts[0].text;
    console.log(summary);
    return res.status(200).json({ summary });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: err.message,
    });
  }
};
exports.paraController = async (req, res) => {
  try {
    const { text } = req.body;
    const response = await axios({
      url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GEMINI_API_TOKEN}`,
      method: "post",
      data: {
        contents: [{ parts: [{ text: `Write a detailed paragraph based on  \n ${text}` }] }],
      },
    });

    const summary = response.data.candidates[0].content.parts[0].text;
    console.log(summary);
    return res.status(200).json({ summary });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: err.message,
    });
  }
};

exports.chatbotController = async (req, res) => {
  try {
    const { text } = req.body;
    const response = await axios({
      url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GEMINI_API_TOKEN}`,
      method: "post",
      data: {
        contents: [
          {
            parts: [
              {
                text: `Please provide a detailed and friendly response to the following question, as if you were having a conversation with the user:\n\nQuestion: ${text}\nResponse:`,
              },
            ],
          },
        ],
      },
    });

    const summary = response.data.candidates[0].content.parts[0].text;
    console.log(summary);
    return res.status(200).json({ summary });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: err.message,
    });
  }
};
exports.codeController = async (req, res) => {
  try {
    const { text } = req.body;
    const response = await axios({
      url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GEMINI_API_TOKEN}`,
      method: "post",
      data: {
        contents: [{ parts: [{ text: `Generate a code for the below described problem  \n ${text}` }] }],
      },
    });

    const summary = response.data.candidates[0].content.parts[0].text;
    console.log(summary);
    return res.status(200).json({ summary });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: err.message,
    });
  }
};