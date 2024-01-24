const mongoose = require('mongoose')

const Schema = mongoose.Schema

const copper01Schema = new Schema({
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
    }},
    rng4b: {type: Number, required: true},
    rng4m: {type: Number, required: true},
    rng4t: {type: Number, required: true},
    rng4Average: {type: Number, default: function() {
        return (Math.round((this.rng4b + this.rng4m + this.rng4t) / 3))
    }},
    rng1od1: {type: Number, required: true},
    rng1od2: {type: Number, required: true},
    rng1odAverage: {type: Number, default: function() {
        return (Math.round((this.rng1od1 + this.rng1od2) / 2))
    }},
    rng2od1: {type: Number, required: true},
    rng2od2: {type: Number, required: true},
    rng2odAverage: {type: Number, default: function() {
        return (Math.round((this.rng2od1 + this.rng2od2) / 2))
    }},
    rng3od1: {type: Number, required: true},
    rng3od2: {type: Number, required: true},
    rng3od3: {type: Number, required: true},
    rng3od4: {type: Number, required: true},
    rng3odAverage: {type: Number, default: function() {
        return (Math.round((this.rng3od1 + this.rng3od2 + this.rng3od3 + this.rng3od4) / 4))
    }},
    rng4od1: {type: Number, required: true},
    rng4od2: {type: Number, required: true},
    rng4od3: {type: Number, required: true},
    rng4od4: {type: Number, required: true},
    rng4odAverage: {type: Number, default: function() {
        return (Math.round((this.rng4od1 + this.rng4od2 + this.rng4od3 + this.rng4od4) / 4))
    }}
}, { timestamps: true })

module.exports = mongoose.model('Copper01', copper01Schema)