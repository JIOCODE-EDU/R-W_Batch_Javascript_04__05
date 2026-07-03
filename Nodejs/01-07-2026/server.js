import express from "express";
import dotenv from "dotenv";
import dns from "dns";
import path from "path";
import { fileURLToPath } from "url";

import {connectDB} from "./src/config/db.js";
import studentRoutes from "./src/Routes/studentRoutes.js";

// DNS Configuration
dns.setServers(["8.8.8.8", "8.8.4.4"]);

// Load Environment Variables
dotenv.config();

// Connect MongoDB
connectDB();

// Create Express App
const app = express();

// Current Directory (ES Module)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Body Parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static Folder
app.use(express.static(path.join(__dirname, "public")));

// EJS Setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Home Route
app.get("/", (req, res) => {
    res.redirect("/students");
});

// Student Routes
app.use("/students", studentRoutes);

// 404 Page
app.use((req, res) => {
    res.status(404).render("404");
});

// Global Error Handler
app.use((err, req, res, next) => {
    console.log(err.stack);

    res.status(500).send("Something Went Wrong");
});

// Start Server
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log("===================================");
    console.log(`Server Running Successfully`);
    console.log(`http://localhost:${PORT}`);
    console.log("===================================");
});