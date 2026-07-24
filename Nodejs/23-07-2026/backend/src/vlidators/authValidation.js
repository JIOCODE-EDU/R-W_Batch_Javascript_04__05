import { body } from "express-validator";

export const registerValidation = [
  body("name")
    .notEmpty()
    .withMessage("Name is required."),
  body("email")
    .notEmpty()
    .withMessage("Valid email is required.")
    .bail()
    .isEmail()
    .withMessage("Please provide a valid email."),
  body("password")
    .notEmpty()
    .withMessage("Password is required.")
    .bail()
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters."),
];

export const loginValidation = [
  body("email")
    .notEmpty()
    .withMessage("Valid email is required.")
    .bail()
    .isEmail()
    .withMessage("Please provide a valid email."),
  body("password")
    .notEmpty()
    .withMessage("Password is required."),
];
