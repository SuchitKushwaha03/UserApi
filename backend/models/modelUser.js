const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name : {
        type: String,
        required: [true, 'Please Enter Name']
    },
    email :{
        type: String,
        required: [true, 'please Enter E-mail'],
        unique: [true, 'This email Already exists']
    },
    age: {
        type: Number,
        required: [true, 'please Enter Age']
    }
},{
    timestamps: true
})

module.exports = mongoose.model("user", userSchema) 