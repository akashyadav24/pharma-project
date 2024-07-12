const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    "user_id": {
        "type": "String",
        "primary key": true,
        "required": true
    },
    "user_first_name": {
        "type": "String",
        "required": true
    },
    "user_last_name": {
        "type": "String",
        "required": true
    },
    "user_email": {
        "type": "String",
        "required": true
    },
    "user_contact": {
        "type": "Number",
        "required": true
    },
    "Address" : {
         type : "string",
        },
    

    "password": {
        "type": "string",
        "required": true
    },

  });


const UserModel = mongoose.model('User', UserSchema, 'User');

module.exports = {
    UserModel,
}
  