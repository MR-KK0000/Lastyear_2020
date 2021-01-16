const jwt = require('jsonwebtoken')

const authController = {}

authController.testtoken = async (req, res) =>{
    try {
        let token = await jwt.sign({type: 'testtoken'},"secret",{expiresIn: 600})
        res.status(200).json({message: "test pass", token: token})
    } catch (error) {
        console.log(error)
        res.status(400).json({error: error.message})
    }
}



module.exports = authController