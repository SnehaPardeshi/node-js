const User = require("../model/usermodel");
const asyncHandler = require("express-async-handler"); 


const signUp = asyncHandler(async (req, res) => {
    const email = req.body.email;
    const findUser = await User.findOne({ email: email });
    if (!findUser) {
      const newUser = await User.create(req.body);
      res.json(newUser);
    } else {
      throw new Error("Invalid Credentials");
    }
  });

const getAllUser= asyncHandler (async (req, res) => {
    try {
        const get = await User.find()
        res.send(get)
    } catch (error) {
        throw new Error(error)
    }
})

//get intern by id

const getUser = asyncHandler ( async ( req, res) => {
    const {id} = req.params
    try {
        const getI = await User.findById(id)
        res.send(getI)
    } catch (error) {
        throw new Error(error)
    }
})

// update a Intern

const updateUser = asyncHandler( async ( req, res) => {
    const {id} = req.params
    try {
        const updated = await User.findByIdAndUpdate(id,
            {
                name : req?.body?. name,
                email : req?.body?.email,
                mobile : req?.body?.mobile,
                password : req?.body?.password
            },
            { new : true})
            res.json(updated)
    } catch (error) {
        throw new Error(error)
    }
})

// delete by id

const deleteUser  = asyncHandler( async ( req, res) => {
    const {id} = req.params
    try {
        const deleted = await User.findByIdAndDelete(id)
        res.json({message : "User deleted" , deleted})
        
    } catch (error) {
        throw new Error(error)
    }
})

module.exports = {
    getAllUser,
    getUser,
    updateUser,
    deleteUser,
    signUp
};