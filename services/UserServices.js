const UserRepository = require("../repository/UserRepository");

const getAllUsers = async () => {
  try {
    const users = await UserRepository.findAllUsers();
    return users;
  } catch (error) {
  console.log("🚀 ~ file: UserServices.js ~ line 8 ~ getAllUsers ~ error", error);
    
  }
};

const getUserById = async (id) => {
  try {
    const user = await UserRepository.findUserById(id);
    return user;
  } catch (error) {
  console.log("🚀 ~ file: UserServices.js ~ line 20 ~ getUserById ~ error", error);
    
  }
};

const deleteUserById = async (id) => {
  try {
    const user = await UserRepository.deleteUserById(id);
    return user;
  } catch (error) {
  console.log("🚀 ~ file: UserServices.js ~ line 32 ~ deleteUserById ~ error", error);
   
  }
};

const updateUserById = async (id, data) => {
  try {
    const user = await UserRepository.updateUserById(id , data);
    return book;
  } catch (error) {
  console.log("🚀 ~ file: UserServices.js ~ line 44 ~ updateUserById ~ error", error);
    
  }
};

const deleteAllUser = async () => {
  try {
    const user = await UserRepository.deleteAllUser();
    return user;
  } catch (error) {
  console.log("🚀 ~ file: UserServices.js ~ line 56 ~ deleteAllUser ~ error", error);
   
  }
};


module.exports = {
  getAllUsers,
  getUserById,
  deleteAllUser,
  deleteUserById,
  updateUserById
};
