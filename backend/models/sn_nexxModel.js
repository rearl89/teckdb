const mongoose = require('mongoose')

const Schema = mongoose.Schema

const sn_nexxSchema = new Schema({
    batchID: {type: Number, required: true},
    anode: {type: String, default: function() {
        const result = this.batchID % 100
        return (result.toString().padStart(2, '0'))
    }},
    weight: {type: Number, required: true},
    thickness: {type: Number, required: false},
    visualPass: {type: String, required: true},
    comment: {type: String, required: false}
}, { timestamps: true })

module.exports = mongoose.model('Sn_Nexx', sn_nexxSchema)