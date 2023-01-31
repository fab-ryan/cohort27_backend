const mongooser = require('mongoose');

const UseSchema = new mongooser.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongooser.model('User', UseSchema);
