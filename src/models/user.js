const mongoose = require('mongoose')
const validator = require ('validator')
const bcrypt = require ('bcryptjs')
const jwt = require ('jsonwebtoken')
const Task = require('./task')

const userSchema = new mongoose.Schema({
    name : {
        type: String,
        required : true,
        trim : true  
    },
    email : {
        type: String ,
        unique: true,
        required : true,
        trim : true ,
        lowercase : true ,
        validate (value) {
            if (!validator.isEmail(value)) {
                throw new Error ('Email is invalid')
            }
        }
    },  
    age : {
        type: Number,
        default : 0 ,
        validate (value) {
            if (value < 0) {
                throw new Error ('Age Must Be A Positive Number')
            }
        }
    },
    password : {
        type : String ,
        trim : true ,
        required : true ,
        minlength : 7 ,
        validate (value) {
            var password = value.includes("password")
            //console.log(password);
            if (password){
                throw new Error ('Password should not contain the word password')
            }
        }
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }],
    avatar: {
        type: Buffer
    }
}, {
    timestamps: true 
})

userSchema.virtual('tasks', {
    ref: 'Task',
    localField: '_id',
    foreignField: 'owner'
})

userSchema.methods.toJSON = function () {
    const user = this 
    const userObject = user.toObject()
    //console.log(userObject)
    delete userObject.password
    delete userObject.tokens
    delete userObject.avatar

    return userObject
}

userSchema.methods.generateAuthToken = async function () {
    const user = this 
    const token = jwt.sign( { _id: user._id.toString() }, 'thisisasecretformyapp')
    
    user.tokens = user.tokens.concat({token})
    await user.save()

    return token
}

userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({email})
    
    if (!user){
        throw new Error ('Unable to Login')
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch){
        throw new Error ('Unable to Login ')
    }

    return user 
}

// Hash The Plain Text Password Before Saving 
userSchema.pre('save', async function (next) {
    const user = this
    
    if (user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 8)
    }
    //console.log('Just Before Saving')

    next()
})

// Delete User Tasks When User is Removed 
userSchema.pre('remove', async function (next) {
    const user = this
    Task.deleteMany({ owner : user._id})
    next()
})

const User = mongoose.model ('User', userSchema )

module.exports = User
