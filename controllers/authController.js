const User = require('../models/User');
const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

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
        const user = await User.findOne(email);
        if(user){
            const auth = await bcrypt.compare(password, user.password)
            if(auth){
                let token = jwt.sign({ user: user._id }, 'secretKey');
                res.status(200).json({
                    title: 'Loggin success',
                    token,
                    role: user.role
                });
                return user;
            } else {
                res.status(401).json('error: login failed');
            }
        }
    } catch (err) {
        const errors = handleError(err);
        res.status(400).json({ errors });
    }
}