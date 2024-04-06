const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ni200Schema = new Schema({
    batchID: {type: String, required: true},
    set: {type: Number, default: function() {
        const length = this.batchID.length;

        if (length === 8 || length === 9) {
            const lastDigitsCount = (length === 8) ? 2 : 3;
            result = parseInt(this.batchID.slice(-lastDigitsCount));
            return result;
        }
    }},
    postPass: {type: String, required: true},
    spongePass: {type: String, required: true},
    rng1b: {type: Number, required: true},
    rng1m: {type: Number, required: true},
    rng1t: {type: Number, required: true},
    rng1Average: {type: Number, default: function() {
        return (Math.round((this.rng1b + this.rng1m + this.rng1t) / 3))
    }},
    rng2b: {type: Number, required: true},
    rng2m: {type: Number, required: true},
    rng2t: {type: Number, required: true},
    rng2Average: {type: Number, default: function() {
        return (Math.round((this.rng2b + this.rng2m + this.rng2t) / 3))
    }},
    rng3b: {type: Number, required: true},
    rng3m: {type: Number, required: true},
    rng3t: {type: Number, required: true},
    rng3Average: {type: Number, default: function() {
        return (Math.round((this.rng3b + this.rng3m + this.rng3t) / 3))
    }}
}, { timestamps: true })

module.exports = mongoose.model('Ni200', ni200Schema)