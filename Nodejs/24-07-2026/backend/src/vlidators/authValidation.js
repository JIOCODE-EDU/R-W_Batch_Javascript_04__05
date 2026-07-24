import { body } from "express-validator";

export const registerValidation = () => {
  body("name")
  .notEmpty()
  .withMessage("Name is Required.")

  body("email")
  .notEmpty()
  .withMessage("valid Email Required.")

  body("password")
  .notEmpty({min:6})
  .withMessage("Password minimum 6 Characrters.")
}

export const loginValidation = () => {
   body("email")
  .notEmpty()
  .withMessage("valid Email Required.")

  body("password")
  .notEmpty()
  .withMessage("Password Required.")
}