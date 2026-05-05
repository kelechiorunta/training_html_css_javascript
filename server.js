import express from "express";
import bodyParser from "body-parser";
import { createServer } from "http";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

app.post("/user", (req, res) => {
  const { name, email } = req.body;
  res.status(200).json({ name, email });
});



const server = createServer(app);

server.listen(3650, () => console.log("Server is listening at PORT 3650"));

export { app }

export default server
