const { signedCookie } = require('cookie-parser');
var express = require('express');
const User = require('../../database/models/User');
var router = express.Router();
const bcrypt = require('../../utils/bcrypt');
const { createToken } = require('../../utils/jwt');

router.post('/register', async(req, res, next) => {
    let data = req.body;
    try {
        const user = await User.findOne({ email: data.email });       

        if(user) res.status(400).send('user already exist');

        const hashPassword = await bcrypt.hashPassword(data.password);
        console.log("🚀 ~ file: auth.js ~ line 15 ~ router.post ~ hashPassword", hashPassword)

        const newUser = await User.create({...data, password: hashPassword});

        if(!newUser) return res.status(500).send('Server internal error!!!');

        return res.status(200).send(newUser);
    } catch (error) {
    console.log("🚀 ~ file: auth.js ~ line 14 ~ router.post ~ error", error);
    next(error);      
    }
  });

router.post('/login', async(req, res, next) => {
    let { email , password } = req.body;
    if(!email || !password) return res.status(400).send('empty email or password');
    try {
        const foundUser = await User.findOne({email});

        if(!foundUser) return res.status(403).send('email not correct!!!');

        const isValidPassword = await bcrypt.checkPassword(password, foundUser.password);

        if(!isValidPassword) return res.status(401).send('password not correct!!!');
       
        const {email: userEmail, role, fullname } = foundUser;

        const payload = {email: userEmail, role, fullname};

        const token = await createToken(payload);

        return res.status(200).send(token);
    } catch (error) {
    console.log("🚀 ~ file: auth.js ~ line 27 ~ router.post ~ error", error);
    next(error);        
    }

  });

module.exports = router;
