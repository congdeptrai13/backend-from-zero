const User = require("../models/user")

const getUsersAPI = async (req, res) => {
  let results = await User.find({});
  return res.status(200).json({
    EC: 0,
    data: results
  }
  )
}

const postCreateUserAPI = async (req, res) => {
  let email = req.body.email;
  let name = req.body.myname;
  let city = req.body.city;

  let user = await User.create({
    email,
    name,
    city,
  });
  return res.status(201).json({
    EC: 0,
    data: user
  }
  )
}

const putUpdateUserAPI = async (req, res) => {
  let email = req.body.email;
  let name = req.body.myname;
  let city = req.body.city;
  let userId = req.body.userId;

  // await updateUserById(email, city, name, userId);
  let user = await User.updateOne({ _id: userId }, { name, city, email });

  return res.status(200).json({
    EC: 0,
    data: user
  }
  )
}

const deleteUserAPI = async (req, res) => {
  const id = req.body.userId;
  // await deleteUserById(id);
  let result = await User.deleteOne({
    _id: id
  })
  return res.status(200).json({
    EC: 0,
    data: result
  }
  )
}

module.exports = {
  getUsersAPI,
  postCreateUserAPI,
  putUpdateUserAPI,
  deleteUserAPI
}