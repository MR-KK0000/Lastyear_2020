const User = require('../models/User')

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userController = {}


userController.register = async(req, res) =>{
    try {
        const { username, password } = req.body
        // console.log(`${username}  ${password}`)
        let passHask = await bcrypt.hash(password,10)
        let checkUser = await User.find({username: username})
        if(checkUser.length !== 0) throw new Error("user")
        let result = await User.create({
            username,
            password: passHask
        })

        res.status(200).json({status: 1, message: "register user success"})
    } catch (error) {
        console.log(error)
        if(error.message =="user"){
            res.status(400).json({status: 0,message: "user"})
        }else{
            res.status(400).json({status: 0,message: error.message})
        }
        
    }
}

userController.login = async (req, res) =>{
    try {
        const { username, password} = req.body
        console.log(`username : ${username} pass: ${password}`)
        let userData = await User.findOne({username:username})
        if(userData.length === 0) throw 'no data'

        let chackPass = await bcrypt.compare(password, userData.password)
        if(!chackPass) throw 'notpass'
        let token = await jwt.sign({user: username, status: userData.permissions,id: userData._id},"secret",{expiresIn: '3m'})
        await User.updateOne({_id: userData._id},{$set: {
            token: token
        }})
        res.status(200).json({status: 1, token: token,message:"login success"})

    } catch (error) {
        console.log(error)
        res.status(400).json({status: 0,message: error.message})
    }
}

module.exports =  userController