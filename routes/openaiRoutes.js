const express = require("express");
const { codeController,summaryController,paraController ,chatbotController} = require("../controllers/openaicontroller");

const router = express.Router();

// Define the route
router.post("/summary", summaryController);
router.post("/paragraph", paraController);
router.post("/chatbot", chatbotController);
router.post("/codegen", codeController);

module.exports = router;
