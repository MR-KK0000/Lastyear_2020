const {verifyTest } = require('../middleware/Auth')

const testContrioller = require('../controller/TestController')
const authController = require('../controller/AuthController')
const userController = require('../controller/userController')

module.exports = (app) =>{
    app.get('/api/test',verifyTest, testContrioller.testfn)

    //auth
    app.get('/api/testtoken', authController.testtoken)

    //user
    app.post('/api/user/register', userController.register)
    app.post('/api/user/login', userController.login)
}