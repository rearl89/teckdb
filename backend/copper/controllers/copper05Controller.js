const Copper05 = require('../models/copper05Model')
const mongoose = require('mongoose')


const getCopper05s = async (req, res) => {
    const copper05s = await Copper05.find({}).sort({createdAt: -1})

    res.status(200).json(copper05s)
}

const getCopper05 = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no such anode'})
    }

    const copper05 = await Copper05.findById(id)

    if(!copper05) {
        return res.status(404).json({error: 'no such anode'})
    }

    res.status(200).json(copper05)
}

const createCopper05 = async (req, res) => {
    const {batchID, postPass, spongePass, rng1b, rng1m, rng1t, rng1Average, rng2b, rng2m, rng2t, rng2Average, rng3b, rng3m, rng3t, rng3Average, rng4b, rng4m, rng4t, rng4Average, rng1coat, rng2coat, rng3coat, rng4coat} = req.body

    let emptyFields = []

    if (!batchID) {
        emptyFields.push('batchID')
    }
    if (!postPass) {
        emptyFields.push('pass post')
    }
    if (!spongePass) {
        emptyFields.push('pass sponge')
    }
    if (!rng1b) {
        emptyFields.push('rng1b')
    }
    if (!rng1m) {
        emptyFields.push('rng1m')
    }
    if (!rng1t) {
        emptyFields.push('rng1t')
    }
    if (!rng2b) {
        emptyFields.push('rng2b')
    }
    if (!rng2m) {
        emptyFields.push('rng2m')
    }
    if (!rng2t) {
        emptyFields.push('rng2t')
    }
    if (!rng3b) {
        emptyFields.push('rng3b')
    }
    if (!rng3m) {
        emptyFields.push('rng3m')
    }
    if (!rng3t) {
        emptyFields.push('rng3t')
    }
    if (!rng4b) {
        emptyFields.push('rng4b')
    }
    if (!rng4m) {
        emptyFields.push('rng4m')
    }
    if (!rng4t) {
        emptyFields.push('rng4t')
    }
    if (emptyFields.length > 0) {
        return res.status(400).json({error: 'Please fill in all required fields', emptyFields })
    }

    try {
        const copper05 = await Copper05.create({
            batchID, postPass, spongePass, rng1b, rng1m, rng1t, rng1Average, rng2b, rng2m, rng2t, rng2Average, rng3b, rng3m, rng3t, rng3Average, rng4b, rng4m, rng4t, rng4Average, rng1coat, rng2coat, rng3coat, rng4coat
        })
        res.status(200).json(copper05)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const deleteCopper05 = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no such anode'})
    }

    const copper05 = await Copper05.findOneAndDelete({_id: id})

    if(!copper05) {
        return res.status(404).json({error: 'no such anode'})
    }

    res.status(200).json(copper05)
}

const updateCopper05 = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no such anode'})
    }

    const copper05 = await Copper05.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!copper05) {
        return res.status(404).json({error: 'no such anode'})
    }

    res.status(200).json(copper05)
}

module.exports = { getCopper05s, getCopper05, createCopper05, deleteCopper05, updateCopper05 }