

const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const connectDB = require("./config/config");
const authRoutes = require("./routes/authRoute");
const openaiRoutes = require("./routes/openaiRoutes");
const errorHandler = require("./middlewares/errorMiddleware");

dotenv.config();

// Mongo connection
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(errorHandler);

// Routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/openai', openaiRoutes);

// Error Handling
app.use(errorHandler);

const PORT = process.env.PORT;
app.get('/', (req, res) => {
    res.send("Hello World");
});

app.listen(PORT, () => console.log(`Server started at ${process.env.DEV_MODE} mode on ${PORT}`.bgCyan.white));
