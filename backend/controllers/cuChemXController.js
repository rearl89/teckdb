const CuChemX = require('../models/cuChemXModel')
const mongoose = require('mongoose')


const getCuChemXs = async (req, res) => {
    const cuChemXs = await CuChemX.find({}).sort({createdAt: -1})

    res.status(200).json(cuChemXs)
}

const getCuChemX = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no such anode'})
    }

    const cuChemX = await CuChemX.findById(id)

    if(!cuChemX) {
        return res.status(404).json({error: 'no such anode'})
    }

    res.status(200).json(cuChemX)
}

const createCuChemX = async (req, res) => {
    const {batchID, weight, thickness, visualPass, comment} = req.body

    let emptyFields = []

    if (!batchID) {
        emptyFields.push('batchID')
    }
    if (!weight) {
        emptyFields.push('weight')
    }
    if (!visualPass) {
        emptyFields.push('pass visual')
    }
    if (emptyFields.length > 0) {
        return res.status(400).json({error: 'Please fill in all required fields', emptyFields })
    }

    try {
        const cuChemX = await CuChemX.create({
            batchID, weight, thickness, visualPass, comment
        })
        res.status(200).json(cuChemX)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const deleteCuChemX = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no such anode'})
    }

    const cuChemX = await CuChemX.findOneAndDelete({_id: id})

    if(!cuChemX) {
        return res.status(404).json({error: 'no such anode'})
    }

    res.status(200).json(cuChemX)
}

const updateCuChemX = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no such anode'})
    }

    const cuChemX = await CuChemX.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!cuChemX) {
        return res.status(404).json({error: 'no such anode'})
    }

    res.status(200).json(cuChemX)
}

module.exports = { getCuChemXs, getCuChemX, createCuChemX, deleteCuChemX, updateCuChemX }