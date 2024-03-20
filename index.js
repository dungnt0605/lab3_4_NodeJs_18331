import express from "express";
import connectdb from "./database/connect.js";
import router from "./router/book.router.js";

const app = express();
const port = 8200;
app.use(express.json());

app.use("/api", router);

app.listen(port, async (req, res) => {
  await connectdb();
  console.log(`Endpoin : http://localhost:${port}/ `);
});
