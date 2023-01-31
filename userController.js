const User = require('./models/user');
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createUser = async (req, res) => {
  try {
    const user = new User({
      username: req.body.username,
      password: req.body.password,
    });
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getSingleUser = async (req, res) => {
  try {
    console.log(req);
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    res.send(err);
  }
};
exports = module.exports = {
  getAllUsers,
  createUser,
  getSingleUser,
};
