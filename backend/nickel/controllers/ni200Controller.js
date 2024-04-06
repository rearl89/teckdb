const Ni200 = require('../models/ni200Model')
const mongoose = require('mongoose')


const getNi200s = async (req, res) => {
    const ni200s = await Ni200.find({}).sort({createdAt: -1})

    res.status(200).json(ni200s)
}

const getNi200 = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no such anode'})
    }

    const ni200 = await Ni200.findById(id)

    if(!ni200) {
        return res.status(404).json({error: 'no such anode'})
    }

    res.status(200).json(ni200)
}

const createNi200 = async (req, res) => {
    const {batchID, postPass, spongePass, rng1b, rng1m, rng1t, rng1Average, rng2b, rng2m, rng2t, rng2Average, rng3b, rng3m, rng3t, rng3Average} = req.body

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
    if (emptyFields.length > 0) {
        return res.status(400).json({error: 'Please fill in all required fields', emptyFields })
    }

    try {
        const ni200 = await Ni200.create({
            batchID, postPass, spongePass, rng1b, rng1m, rng1t, rng1Average, rng2b, rng2m, rng2t, rng2Average, rng3b, rng3m, rng3t, rng3Average
        })
        res.status(200).json(ni200)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const deleteNi200 = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no such anode'})
    }

    const ni200 = await Ni200.findOneAndDelete({_id: id})

    if(!ni200) {
        return res.status(404).json({error: 'no such anode'})
    }

    res.status(200).json(ni200)
}

const updateNi200 = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no such anode'})
    }

    const ni200 = await Ni200.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!ni200) {
        return res.status(404).json({error: 'no such anode'})
    }

    res.status(200).json(ni200)
}

module.exports = { getNi200s, getNi200, createNi200, deleteNi200, updateNi200 }