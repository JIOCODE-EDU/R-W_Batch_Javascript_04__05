import {body , validationResult} from 'express-validator'

export const studentValidation = [

  body("name").trim().notEmpty().withMessage("Name is Required"),
  body("email").isEmail().withMessage("Valid Email is Required"),
  body("age").isInt({min:18}).withMessage("Age must be grether than or equal to 18")

]

export const validation = (req , res , next) => {

  const errors = validationResult(req)

  if(!errors.isEmpty()){
    return res.status(400).json({
      success:false,
      errors:errors.array()
    })
  }

  next();


}