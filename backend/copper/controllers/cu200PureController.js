const Cu200Pure = require('../models/cu200PureModel')
const mongoose = require('mongoose')


const getCu200Pures = async (req, res) => {
    const cu200Pures = await Cu200Pure.find({}).sort({createdAt: -1})

    res.status(200).json(cu200Pures)
}

const getCu200Pure = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no such anode'})
    }

    const cu200Pure = await Cu200Pure.findById(id)

    if(!cu200Pure) {
        return res.status(404).json({error: 'no such anode'})
    }

    res.status(200).json(cu200Pure)
}

const createCu200Pure = async (req, res) => {
    const {batchID, postPass, spongePass, rng1b, rng1m, rng1t, rng1Average, rng2b, rng2m, rng2t, rng2Average, rng3b, rng3m, rng3t, rng3Average, rng4b, rng4m, rng4t, rng4Average} = req.body

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
        const cu200Pure = await Cu200Pure.create({
            batchID, postPass, spongePass, rng1b, rng1m, rng1t, rng1Average, rng2b, rng2m, rng2t, rng2Average, rng3b, rng3m, rng3t, rng3Average, rng4b, rng4m, rng4t, rng4Average
        })
        res.status(200).json(cu200Pure)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const deleteCu200Pure = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no such anode'})
    }

    const cu200Pure = await Cu200Pure.findOneAndDelete({_id: id})

    if(!cu200Pure) {
        return res.status(404).json({error: 'no such anode'})
    }

    res.status(200).json(cu200Pure)
}

const updateCu200Pure = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no such anode'})
    }

    const cu200Pure = await Cu200Pure.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!cu200Pure) {
        return res.status(404).json({error: 'no such anode'})
    }

    res.status(200).json(cu200Pure)
}

module.exports = { getCu200Pures, getCu200Pure, createCu200Pure, deleteCu200Pure, updateCu200Pure }