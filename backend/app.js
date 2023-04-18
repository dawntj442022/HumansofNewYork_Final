require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./database");
const authRoutes = require("./routes/api/auth");
const postRoutes = require("./routes/api/post");

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
