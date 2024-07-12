
const { hashPayload, jwt } = require('../../utils');
const { ObjectId } = require('mongodb');
const {
  UserModel,

} = require('./users.model');

async function createNewUser({
  user_first_name,user_last_name,  user_email, user_contact,   Address, password,
}) {
 try{
   const hashedPassword = await hashPayload(password);
   const userID = Math.floor(Math.random() * 1000000000).toString();

    //create variable for address_id and store random ObjectID in it

    const checkUser = await UserModel.collection.find({ "user_email" : user_email }).toArray();
   
    if(checkUser.length > 0){
      const err = new Error('User Already Exist');
      err.code = 404;
      err.msg = 'User Already Exist';
      throw err;
    }

   const user = await UserModel.collection.insertOne({
    "user_id" : userID,
    "user_first_name" :  user_first_name,
    "user_last_name" :user_last_name,
    "user_email" : user_email,
    "user_contact" : user_contact,
    "address" : Address,
    "password": hashedPassword,

   });
   console.log('user', user);
  if(!user){
    const err = new Error('Account cannot be created');
    err.code = 404;
    err.msg = 'Account cannot be created due to some issue';
    throw err;
  }
  console.log('user', user.ops[0]);
  const accessToken = jwt.createAccessToken({
    id: user.ops[0].user_id,
    email: user.ops[0].user_email,
    mobile: user.ops[0].user_contact,
    tokenType: 'LoginToken',
  });
  return {
    token: accessToken
  };
  }
  catch(err){
    console.log(err);
    next(err);
  }
}

async function loginUser({ Email, password }) {
  try{
  const hashedPassword = await hashPayload(password);

  const res = await UserModel.collection.find({ "user_email" : Email }).toArray();

  console.log('---res---', res);

  if (!res[0]) {
    const err = new Error('User Not found');
    err.code = 404;
    err.msg = 'User not found in records';
    throw err;
  }

  if (res[0].password !== hashedPassword) {
    const msg = 'Error in Email/Password';
    const err = new Error(msg);
    err.code = 404;
    err.msg = msg;
    throw err;
  }
  console.log('---res---', res[0]);

  const accessToken = jwt.createAccessToken({
    id: res[0].id,
    email: res[0].user_email,
    mobile: res[0].user_contact,
    tokenType: 'LoginToken',
  });

  delete res[0].password;
  delete res[0].created_at;
  delete res[0].updated_at;

  return {
    token: accessToken,
  };
  }
  catch(err){
    console.log(err);
    next(err);
  }
}

module.exports = {
  createNewUser,
  loginUser,
};
