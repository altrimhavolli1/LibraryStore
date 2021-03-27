const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: [true, 'Please enter your name'],
    },
    lastName: {
        type: String,
        required: [true, 'Please enter your last name'],
    },
    address: {
        type: String,
        required: [true, 'Please enter your address']
    },
    email: {
        type: String,
        required: [true, 'Email field is required'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email address']
    },
    password: {
        type: String,
        required: [true, 'Password field is required'],
        minlength: [6, 'Min password length is 6 characters']
    },
    role: {
        type: String,
        required: [true, 'Please enter a role']
    }
});

// fire a function before doc saved to db
UserSchema.pre('save', async function(next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// static method to login user
// UserSchema.statics.login = async function(email, password) {
//     const user = await this.findOne({ email });
//     if(user){
//         const auth = await bcrypt.compare(password, user.password)
//         if(auth){
//             return user;
//         }
//         throw Error('Password is not valid')
//     }
//     throw Error('Email does not exist')
// }

const User = mongoose.model('user', UserSchema);

module.exports = User;