import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { createServer } from "http";

const app = express();

// Serve static files such as css and images
app.use(express.static(path.join(".", ".")));

//
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

// app.get("/", (req, res) => {
//   const filePath = path.resolve(".", "index.html");
//   res.sendFile(filePath);
// });

app.post("/user", (req, res) => {
  const { name, email } = req.body;
  res.status(200).json({ name, email });
});

const server = createServer(app);

server.listen(3650, () => console.log("Server is listening at PORT 3650"));

export { app };

export default server;
