const UserModel = require("../database/models/User");

const findAllUsers = async () => {
  try {
    const users = await UserModel.find({});
    return users;
  } catch (error) {
  console.log("🚀 ~ file: UserRepository.js ~ line 8 ~ findAllUsers ~ error", error);
  }
};

const findUserById = async (id) => {
  try {
    const user = await UserModel.findById(id);

    return user;
  } catch (error) {
  console.log("🚀 ~ file: UserRepository.js ~ line 18 ~ findUserById ~ error", error);
    
  }
};



const deleteUserById = async (id) => {
  try {
    const book = await UserModel.findByIdAndDelete(id);
    return book;
  } catch (error) {
  console.log("🚀 ~ file: UserRepository.js ~ line 30 ~ deleteUserById ~ error", error);
   
  }
};


const updateUserById = async (id, data) => {
  try {
    const book = await UserModel.findByIdAndUpdate(id, data);
    return book;
  } catch (error) {
  console.log("🚀 ~ file: UserRepository.js ~ line 41 ~ updateUserById ~ error", error);
    
  }
};

const deleteAllUser = async () => {
  try {
    const user = await UserModel.deleteMany();
    return user;
  } catch (error) {
  console.log("🚀 ~ file: UserRepository.js ~ line 51 ~ deleteAllUser ~ error", error);
    
  }
};

module.exports = {
  findAllUsers,
  findUserById,
  deleteAllUser,
  deleteUserById,
  updateUserById
};
