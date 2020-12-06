const mongoose = require('mongoose')
const Schema = mongoose.Schema

const testSchema = new Schema({

},{
    versionKey: false
})

const test = mongoose.model('tests', testSchema)

module.exports = test