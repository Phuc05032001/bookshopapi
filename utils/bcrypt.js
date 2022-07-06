require("dotenv").config();
const bcrypt = require('bcrypt');
const SALT = 10;

const hashPassword = async (plainPassword) => {
    
    try {      
        const hased = await bcrypt.hash(plainPassword, SALT);
        console.log("🚀 ~ file: bcrypt.js ~ line 9 ~ hashPassword ~ hased", hased)
        return hased;
    } catch (error) {
    console.log("🚀 ~ file: bcrypt.js ~ line 7 ~ hashPassword ~ error", error);
    return error;       
    }

}

const checkPassword = async (password, encryptedPassword) => {
    try {
        const isValidPassword = await bcrypt.compare(password, encryptedPassword);
        return isValidPassword;
    } catch (error) {
    console.log("🚀 ~ file: bcrypt.js ~ line 22 ~ checkPassword ~ error", error)
        return error;
    }
}

module.exports ={
    hashPassword,
    checkPassword,
}