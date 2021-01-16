const jwt = require('jsonwebtoken')
const authorization = require('../helper/Authorization')

const auth = {}

auth.verifyTest = async(req,res,next) =>{
    try {
        const token = authorization.retrieveToken(req)
        if(!token) { throw { message: "Untoken" }}

        const { err, decode } = await jwt.verify(token,"secret", (err, decode) => ({ err,decode}))
        if(err) { throw { message: "error"}}

        next();

    } catch (error) {
        console.log(error)
        res.status(400).json({error:error})
    }
}

module.exports = auth