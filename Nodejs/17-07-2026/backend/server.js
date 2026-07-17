import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import router from "./routes/upload.routes.js";
import corsMiddleware from "./middleware/cors.middleware.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();


// server uploaded files

app.use(express.json())
app.use(corsMiddleware)

app.use(express.urlencoded({extended:true}))

app.use("/uploads" , express.static(path.join(__dirname , 'uploads')))

app.use("/upload" , router)

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});