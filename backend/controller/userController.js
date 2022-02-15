const mongoose = require('mongoose')
const User = require('../models/modelUser')
const res = require('express/lib/response')
const asyncHandler = require('express-async-handler')



// @route /api/user/
// @method GET
const getUsers = asyncHandler(async (req,res) => {
    
    let user = await User.find();
    
    res.status(200).json(user)    

})

// @route /api/user/
// @method POST
const createUser = asyncHandler(async (req, res) => {
    
    if(!req.body){
        res.status(400)
        throw new Error('Please Provide Information/Data')
    }

    let {name, email, age} = req.body;
    let user = await User.create({
        name: name,
        email: email,
        age: age
    })

    res.status(200).json(user)
})

// @route /api/user/:id
// @method PUT
const updateUser =  asyncHandler(async (req, res) => {
    
    const user = await User.findByIdAndUpdate(req.params.id,{$inc : {"age": 5}})
    // user.age += 5
    // user.save()

    if(!user){
        res.status(404)
        throw new Error('User Not Found');
    }

    const updatedUser = await User.findOne({_id:req.params.id})
    res.status(200).json({
        name: updatedUser.name,
        email: updatedUser.email,
        age: updatedUser.age
    })
})

// @route /api/user/:id
// @method DELETE
const deleteUser = asyncHandler(async (req, res) => {

    const user = await User.findById(req.params.id)
    
    if(!user){
        res.status(404)
        throw new Error('User Not Found');
    }

    await user.remove()
    res.status(200).json({message: `deleted id: ${req.params.id}`});
})      

module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser
}