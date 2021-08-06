const {Schema, model, Types} = require('mongoose')


const schema = new Schema({
    t_id: {type: String, required: true, unique: true},
    title: {type: String, ref: 'Link', required: true},
    completed: {type: Boolean, required: true},
})

module.exports = model('Todo', schema)