import Joi from "joi";

const BookObject = Joi.object({
  name: Joi.string().required().empty().trim().messages({
    "any.required": "Tên không để trống ! ",
    "string.empty": "Tên không đúng định dạng ",
  }),
  price: Joi.number().required().min(1000).messages({
    "any.required": "Giá không để trống ! ",
    "number.min": "Giá sp k nhỏ hơn 1k",
  }),
  description: Joi.string().required().empty().trim().messages({
    "any.required": "Ghi chú không để trống ! ",
    "string.empty": "Ghi chú không đúng định dạng ",
  }),
  image: Joi.string().required().empty().trim().messages({
    "any.required": "Ảnh không để trống ! ",
    "string.empty": "Ảnh không đúng định dạng ",
  }),
  author: Joi.string().required().empty().trim().messages({
    "any.required": "Tên tác giả không để trống ! ",
    "string.empty": "Tên tác giả không đúng định dạng ",
  }),
});
export const checkBookValidate = (req, res, next) => {
  const { error } = BookObject.validate(req.body, { abortEarly: false });
  if (error) {
    const err = error.details.map((e) => e.message);
    res.send({ status: false, message: err });
  } else {
    next();
    0;
  }
};
