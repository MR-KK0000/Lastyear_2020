const testContrioller = require('../controller/TestController')


module.exports = (app) =>{
    app.get('/api/test', testContrioller.testfn)
}