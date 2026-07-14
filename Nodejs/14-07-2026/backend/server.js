import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import uploadFile from "./controllers/upload.controllers.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json())

// server uploaded files

app.use("/uploads" , express.static(path.join(__dirname , 'uploads')))

app.use("/upload" , uploadFile)

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});