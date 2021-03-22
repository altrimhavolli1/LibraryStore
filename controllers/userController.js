const User = require('../models/User');
const jwt = require('jsonwebtoken');

module.exports.findAll = async (req, res) => {
    try{
        await User.find(req.body).then((users) => {
            res.send(users);
        });
        res.status(200);
    }catch(err){
        res.status(404).json({ err });
    }
}

exports.findById = async (req, res) => {
    try {
        User.findOne({_id: req.params.id}).then((user) => {
            res.send(user);
        })
        res.status(200);
    }catch(err){
        res.status(404).json({ err });
    }
}

// const maxAge = 1 * 24 * 60 * 60;
// const createToken = (id) => {
//     return jwt.sign({ id }, 'token', {
//         expiresIn: maxAge
//     })
// }

exports.create = async (req, res) => {
    const emailExists = await User.findOne({ email: req.body.email });
    if(emailExists => 1){
        return res.status(400).json('This email already exists')
    } else {
        const { firstName, lastName, address, email, password, role } = req.body;
        try {
            const createdUser = await User.create({ firstName, lastName, address, email, password, role });
            res.status(200).json({ createdUser, msg: 'User has been created successfully', success: true });
        }catch(err){
            res.status(400).json('error, user not created');
        }
    }
}

module.exports.updateOne = async (req, res) => {
    try{
        User.findByIdAndUpdate({_id: req.params.id}, req.body).then(() => {
            User.findOne({_id: req.params.id}).then((user) => {
                res.send(user);
            });
        });
        res.status(200);
    }catch(err){
        res.status(404).json({ err });
    }
}

module.exports.deleteOne = async (req, res) => {
    try{
        User.findByIdAndRemove({_id: req.params.id}).then((user) => {
            res.send(user);
        });
        res.status(200);
    }catch(err){
        res.status(404).json({ err });
    }
}