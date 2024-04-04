const mongoose = require('mongoose')

const Schema = mongoose.Schema

const cuEbaraSchema = new Schema({
    batchID: {type: String, required: true},
    anode: {type: Number, default: function() {
        const length = this.batchID.length;

        if (length === 8 || length === 9) {
            const lastDigitsCount = (length === 8) ? 2 : 3;
            result = parseInt(this.batchID.slice(-lastDigitsCount));
            return result;
        }
    }},
    weight: {type: Number, required: true},
    thickness: {type: Number, required: false},
    visualPass: {type: String, required: true},
    comment: {type: String, required: false}
}, { timestamps: true })

module.exports = mongoose.model('CuEbara', cuEbaraSchema)