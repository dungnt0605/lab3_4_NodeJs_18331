import express from "express";
import { Book } from "../model/book.js";
import { checkBookValidate } from "../middleware/book.js";

const router = express.Router();

router.post("/books", checkBookValidate, async (req, res) => {
  const response = await new Book(req.body).save();
  res.send({ status: true, data: response });
});

router.get("/books", async (req, res) => {
  const response = await Book.find();
  res.send(response);
});
router.get("/books/:id", async (req, res) => {
  const response = await Book.find({ _id: req.params.id });
  res.send(response);
});
router.put("/books/:id", checkBookValidate, async (req, res) => {
  const response = await Book.findByIdAndUpdate(
    { _id: req.params.id },
    req.body,
    {
      new: true,
    }
  );
  res.send(response);
});

router.delete("/books/:id", async (req, res) => {
  const response = await Book.findOneAndDelete({ _id: req.params.id });
  res.send({
    status: 200,
    message: "Deleted",
  });
});
export default router;
