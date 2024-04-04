const mongoose = require('mongoose')

const Schema = mongoose.Schema

const wedgesSchema = new Schema({
    batchID: {type: Number, required: true},
    anode: {type: Number, default: function() {
        const result = this.batchID % 100
        return result
    }},
    weight1: {type: Number, required: true},
    weight2: {type: Number, required: true},
    weight3: {type: Number, required: true},
    weight4: {type: Number, required: true},
    weight5: {type: Number, required: true},
    thickness: {type: Number, required: false},
    visualPass: {type: String, required: true},
    comment: {type: String, required: false}
}, { timestamps: true })

module.exports = mongoose.model('Wedges', wedgesSchema)