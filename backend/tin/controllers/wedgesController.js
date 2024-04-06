const Wedges = require('../models/wedgesModel')
const mongoose = require('mongoose')


const getWedgess = async (req, res) => {
    const wedgess = await Wedges.find({}).sort({createdAt: -1})

    res.status(200).json(wedgess)
}

const getWedges = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no such anode'})
    }

    const wedges = await Wedges.findById(id)

    if(!wedges) {
        return res.status(404).json({error: 'no such anode'})
    }

    res.status(200).json(wedges)
}

const createWedges = async (req, res) => {
    const {batchID, weight1, weight2, weight3, weight4, weight5, thickness, visualPass, comment} = req.body

    let emptyFields = []

    if (!batchID) {
        emptyFields.push('batchID')
    }
    if (!weight1) {
        emptyFields.push('weight1')
    }
    if (!weight2) {
        emptyFields.push('weight2')
    }
    if (!weight3) {
        emptyFields.push('weight3')
    }
    if (!weight4) {
        emptyFields.push('weight4')
    }
    if (!weight5) {
        emptyFields.push('weight5')
    }
    if (!visualPass) {
        emptyFields.push('pass visual')
    }
    if (emptyFields.length > 0) {
        return res.status(400).json({error: 'Please fill in all required fields', emptyFields })
    }

    try {
        const wedges = await Wedges.create({
            batchID, weight1, weight2, weight3, weight4, weight5, thickness, visualPass, comment
        })
        res.status(200).json(wedges)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const deleteWedges = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no such anode'})
    }

    const wedges = await Wedges.findOneAndDelete({_id: id})

    if(!wedges) {
        return res.status(404).json({error: 'no such anode'})
    }

    res.status(200).json(wedges)
}

const updateWedges = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no such anode'})
    }

    const wedges = await Wedges.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!wedges) {
        return res.status(404).json({error: 'no such anode'})
    }

    res.status(200).json(wedges)
}

module.exports = { getWedgess, getWedges, createWedges, deleteWedges, updateWedges }