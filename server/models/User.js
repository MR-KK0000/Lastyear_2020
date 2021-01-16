const mongoose = require('mongoose')
const Schema =  mongoose.Schema

const userSchema = new Schema({
    username: String,
    password: String,
    permissions: {type: String, default: 'user'},
    token: {type: String, default: ''},
    status: {type: Boolean, default: true},
    created_at: { type: Date, default: Date.now},
    updated_at: { type: Date, default: Date.now}
},{
    versionKey: false
})

const user = mongoose.model('users', userSchema)
module.exports = user