const Copper09DH = require('../models/copper09DHModel')
const mongoose = require('mongoose')


const getCopper09DHs = async (req, res) => {
    const copper09DHs = await Copper09DH.find({}).sort({createdAt: -1})

    res.status(200).json(copper09DHs)
}

const getCopper09DH = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no such anode'})
    }

    const copper09DH = await Copper09DH.findById(id)

    if(!copper09DH) {
        return res.status(404).json({error: 'no such anode'})
    }

    res.status(200).json(copper09DH)
}

const createCopper09DH = async (req, res) => {
    const {batchID, postPass, spongePass, rng1b, rng1m, rng1t, rng1Average, rng2b, rng2m, rng2t, rng2Average, rng3b, rng3m, rng3t, rng3Average, rng4b, rng4m, rng4t, rng4Average, rng1od1, rng1od2, rng1odAverage, rng2od1, rng2od2, rng2odAverage, rng3od1, rng3od2, rng3odAverage, rng4od1, rng4od2, rng4odAverage} = req.body

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
    if (!rng1od1) {
        emptyFields.push('rng1od1')
    }
    if (!rng1od2) {
        emptyFields.push('rng1od2')
    }
    if (!rng2od1) {
        emptyFields.push('rng2od1')
    }
    if (!rng2od2) {
        emptyFields.push('rng2od2')
    }
    if (!rng3od1) {
        emptyFields.push('rng3od1')
    }
    if (!rng3od2) {
        emptyFields.push('rng3od2')
    }
    if (!rng4od1) {
        emptyFields.push('rng4od1')
    }
    if (!rng4od2) {
        emptyFields.push('rng4od2')
    }
    if (emptyFields.length > 0) {
        return res.status(400).json({error: 'Please fill in all required fields', emptyFields })
    }

    try {
        const copper09DH = await Copper09DH.create({
            batchID, postPass, spongePass, rng1b, rng1m, rng1t, rng1Average, rng2b, rng2m, rng2t, rng2Average, rng3b, rng3m, rng3t, rng3Average, rng4b, rng4m, rng4t, rng4Average, rng1od1, rng1od2, rng1odAverage, rng2od1, rng2od2, rng2odAverage, rng3od1, rng3od2, rng3odAverage, rng4od1, rng4od2, rng4odAverage
        })
        res.status(200).json(copper09DH)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const deleteCopper09DH = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no such anode'})
    }

    const copper09DH = await Copper09DH.findOneAndDelete({_id: id})

    if(!copper09DH) {
        return res.status(404).json({error: 'no such anode'})
    }

    res.status(200).json(copper09DH)
}

const updateCopper09DH = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no such anode'})
    }

    const copper09DH = await Copper09DH.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!copper09DH) {
        return res.status(404).json({error: 'no such anode'})
    }

    res.status(200).json(copper09DH)
}

module.exports = { getCopper09DHs, getCopper09DH, createCopper09DH, deleteCopper09DH, updateCopper09DH }