import { body } from "express-validator";

export const registerValidation = [
  body("name")
    .notEmpty()
    .withMessage("Name is Required."),
  body("email")
    .notEmpty()
    .withMessage("Valid Email Required."),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password minimum 6 characters."),
];

export const loginValidation = [
  body("email")
    .notEmpty()
    .withMessage("Valid Email Required."),
  body("password")
    .notEmpty()
    .withMessage("Password Required."),
];