function validateLoginRequest(req) {
  req
    .checkBody('Email', 'user email is required/invalid')
    .isEmail()
    .exists();
  req
    .checkBody('password', 'user password is required')
    .isLength({ min: 6 })
    .exists();
  return req.validationErrors();
}

function validateCreateUserRequest(req) {
  req
    .checkBody('user_email', 'user email is required/invalid')
    .isEmail()
    .exists();
  req
    .checkBody('password', 'user password is required')
    .isLength({ min: 6 })
    .exists();
  req
    .checkBody('user_first_name', 'user FirstName is required')
    .isString()
    .isLength({ min: 3 })
    .exists();
  req
    .checkBody('user_last_name', 'user LastName is required')
    .isString()
    .isLength({ min: 3 })
    .exists();
  return req.validationErrors();
}


module.exports = {
  validateLoginRequest,
  validateCreateUserRequest,
};
