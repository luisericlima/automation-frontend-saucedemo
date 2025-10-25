require('dotenv').config();

module.exports = {
  standardUser: { 
    username: process.env.STANDARD_USER, 
    password: process.env.STANDARD_PASS 
  },
  lockedOutUser: { 
    username: process.env.LOCKED_USER, 
    password: process.env.LOCKED_PASS 
  },
};
