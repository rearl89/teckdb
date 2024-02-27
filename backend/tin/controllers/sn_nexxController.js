const Sn_Nexx = require('../models/sn_nexxModel')
const mongoose = require('mongoose')


const getSn_Nexxs = async (req, res) => {
    const sn_nexxs = await Sn_Nexx.find({}).sort({createdAt: -1})

    res.status(200).json(sn_nexxs)
}

const getSn_Nexx = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no such anode'})
    }

    const sn_nexx = await Sn_Nexx.findById(id)

    if(!sn_nexx) {
        return res.status(404).json({error: 'no such anode'})
    }

    res.status(200).json(sn_nexx)
}

const createSn_Nexx = async (req, res) => {
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
        const sn_nexx = await Sn_Nexx.create({
            batchID, weight, thickness, visualPass, comment
        })
        res.status(200).json(sn_nexx)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const deleteSn_Nexx = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no such anode'})
    }

    const sn_nexx = await Sn_Nexx.findOneAndDelete({_id: id})

    if(!sn_nexx) {
        return res.status(404).json({error: 'no such anode'})
    }

    res.status(200).json(sn_nexx)
}

const updateSn_Nexx = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no such anode'})
    }

    const sn_nexx = await Sn_Nexx.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!sn_nexx) {
        return res.status(404).json({error: 'no such anode'})
    }

    res.status(200).json(sn_nexx)
}

module.exports = { getSn_Nexxs, getSn_Nexx, createSn_Nexx, deleteSn_Nexx, updateSn_Nexx }