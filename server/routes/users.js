import express from 'express';
import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

let router = express.Router();

function validateInput(data) {
  let errors = {};

  if (Validator.isEmpty(data.username)) {
    errors.username = "Username is required";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid"
  }

  if (Validator.isEmpty(data.email)) {
    errors.password = "Password is required";
  }

  if (Validator.isEmpty(data.email)) {
    errors.passwordConfirmation = "Confirm password";
  }

  if (!Validator.equals(data.password, data.passwordConfirmation)) {
    errors.passwordConfirmation = "Passwords must match";
  }

  if (Validator.isEmpty(data.email)) {
    errors.timezone = "Timezone is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}

router.post('/', (req, res)=>{
  const { errors, isValid } = validateInput(req.body);

  if (!isValid) {
    res.status(400).json(errors);
  }
  // console.log(req.body);
});

export default router;
