const {
  validateLoginRequest,
  validateCreateUserRequest,
  validateChangeEmailRequest,
  validateChangePasswordRequest,
} = require('./users.request.validators');
const {
  loginUser,
  createNewUser,
  changeUserEmail,
  changeUserPassword,
} = require('./users.services');
const { sendResponse, handleCustomError } = require('../../utils');
const ResponseMessages = require('../../constants/responseMessages');

async function createNewUserController(req, res,next) {
  try {
    console.log('req.body', req.body);
    const validationErr = validateCreateUserRequest(req);
    if (validationErr) {
      return sendResponse(res, 422, {}, validationErr[0].msg);
    }
    const {
      user_first_name, user_last_name, user_email,  user_contact,  Address, password,
    } = req.body;
    const data = await createNewUser({
      user_first_name, user_last_name, user_email,  user_contact,  Address, password,
    });
    return sendResponse(res, 201, { ...data }, ResponseMessages.genericSuccess);
  } catch (err) {
    console.log(err);
    next(err);
    return handleCustomError(res, err);
  }
}

async function loginUserController(req, res,next) {
  try {
    const validationErr = validateLoginRequest(req);
    if (validationErr) {
      return sendResponse(res, 422, {}, validationErr[0].msg);
    }
    const { Email, password } = req.body;
  
    const data = await loginUser({
      Email,
      password,
    });
    return sendResponse(res, 200, { ...data }, ResponseMessages.genericSuccess);
  } catch (err) {
    next(err);
    return handleCustomError(res, err);
  }
}

module.exports = {
  createNewUserController,
  loginUserController,
};
