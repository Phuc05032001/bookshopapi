const jwt = require("jsonwebtoken");

require("dotenv").config();

const createToken = async (payload) => {
    try {
        const token = await jwt.sign(payload, process.env.SECRET_KEY);

        return token;
        
    } catch (error) {
    console.log("🚀 ~ file: jwt.js ~ line 9 ~ createToken ~ error", error)
    return error;
        
    }
}

module.exports = {
    createToken,
}