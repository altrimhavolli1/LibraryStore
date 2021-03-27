const User = require('../models/User');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const key = process.env.secret;

// handle errors
const handleError = (err) => {
    console.error(err.message, err.code);
    let errors = { email: '', password: '' };
  
    // validation errors
    if (err.message.includes('user validation failed')) {
      Object.values(err.errors).forEach(({ properties }) => {
        errors[properties.path] = properties.message;
      })
    }
  
    return errors;
  }

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({email});
        if(user){
            if (!user) {
                return res.status(404).json("User not found");
            }

            bcrypt.compare(password, user.password).then(isMatch => {
                if(isMatch){
                    const payload = {
                        id: user._id,
                        email: user.email,
                        role: user.role
                    }
                    let token = jwt.sign(payload, 'secretKey');
                    res.status(200).json({
                        token: `Bearer ${token}`,
                        msg: "You're now logged in"
                    });
                } else {
                    return res.status(400).json("Incorrect password")
                }
            })
        }
    } catch (err) {
        // const errors = handleError(err);
        res.status(400).json(err.message);
    }
}

exports.register = async (req, res) => {
    const { firstName, lastName, address, email, password, role } = req.body;
    try {
        const user = await User.findOne({email});
        if(!user){
            await User.create({
                firstName,
                lastName,
                address,
                email,
                password,
                role
            });
            res.status(200).json('User has been created successfully');
        }else {
            res.status(401).json('error: register failed');
        }
    } catch (err) {
        // const errors = handleError(err);
        res.status(400).json(err.message);
    }
}