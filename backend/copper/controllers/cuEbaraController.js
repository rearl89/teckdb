const CuEbara = require('../models/cuEbaraModel')
const mongoose = require('mongoose')


const getCuEbaras = async (req, res) => {
    const cuEbaras = await CuEbara.find({}).sort({createdAt: -1})

    res.status(200).json(cuEbaras)
}

const getCuEbara = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no such anode'})
    }

    const cuEbara = await CuEbara.findById(id)

    if(!cuEbara) {
        return res.status(404).json({error: 'no such anode'})
    }

    res.status(200).json(cuEbara)
}

const createCuEbara = async (req, res) => {
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
        const cuEbara = await CuEbara.create({
            batchID, weight, thickness, visualPass, comment
        })
        res.status(200).json(cuEbara)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const deleteCuEbara = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no such anode'})
    }

    const cuEbara = await CuEbara.findOneAndDelete({_id: id})

    if(!cuEbara) {
        return res.status(404).json({error: 'no such anode'})
    }

    res.status(200).json(cuEbara)
}

const updateCuEbara = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no such anode'})
    }

    const cuEbara = await CuEbara.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!cuEbara) {
        return res.status(404).json({error: 'no such anode'})
    }

    res.status(200).json(cuEbara)
}

module.exports = { getCuEbaras, getCuEbara, createCuEbara, deleteCuEbara, updateCuEbara }