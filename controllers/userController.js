const UserServices = require("../services/UserServices");

const getAllUsers = async (req, res, next) => {
  const users = await UserServices.getAllUsers();
  res.send(users);
};

const getUser = async (req, res, next) => {
  const id = req.params.id;

  const user = await UserServices.getUserById(id);

  if (!user) res.sendStatus(400);

  console.log("🚀 ~ file: book.js ~ line 16 ~ book", user);

  res.send(user);
};

const deleteUserById = async (req, res, next) => {
  const id = req.params.id;

  const user = await UserServices.deleteUserById(id);

  if (!user) res.sendStatus(400);

  console.log("🚀 ~ file: book.js ~ line 16 ~ book", user);

  res.send(user);
};


const deleteAllUser = async (req, res, next) => {
  try {
    // GET : req.params, req.query

    
    if (!req.body) return res.sendStatus(400);

    const user = await UserServices.deleteAllUser();

    if (!user) return res.sendStatus(500);

    return res.status(200).send(user);
  } catch (error) {
    console.log(
      "🚀 ~ file: bookController.js ~ line 34 ~ deleteBook ~ error",
      error
    );
    res.sendStatus(500);
  }
};

const updateUserById = async (req, res, next) => {
  const id = req.params.id;

  // GET : req.params, req.query
  if (!req.body) return res.sendStatus(400);

  const user = await UserServices.updateUserById(id, req.body);

  if (!user) res.sendStatus(400);

  console.log("🚀 ~ file: book.js ~ line 16 ~ book", user);

  res.send(user);
};



module.exports = {
  getAllUsers,
  getUser,
  deleteAllUser,
  deleteUserById,
  updateUserById
};
