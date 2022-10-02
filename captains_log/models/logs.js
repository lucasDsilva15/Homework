const mongoose = require('mongoose')

const Schema = mongoose.Schema

const logsSchema = new Schema({
    title: {type: String, required: true },
    entry: {type: String, required: true},
    shipIsBroken: {type: Boolean,}
    
    
}, 
{timestamps: true}
)


const Logs = mongoose.model('Captains Logs', logsSchema)

module.exports = Logs;


