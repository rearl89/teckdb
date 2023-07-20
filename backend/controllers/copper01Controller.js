const Copper01 = require('../models/copper01Model')


const getCopper01s = async (req, res) => {
    const copper01s = await Copper01.find({}).sort({createdAt: -1})

    res.status(200).json(copper01s)
}

const getCopper01 = async (req, res) => {
    const { id } = req.params

    const copper01 = await Copper01.findById(id)

    if(!copper01) {
        return res.status(404).json({error: 'no such anode'})
    }

    res.status(200).json(copper01)
}

const createCopper01 = async (req, res) => {
    const {batchID, set, postPass, spongePass, rng1b, rng1m, rng1t, rng1Average, rng2b, rng2m, rng2t, rng2Average, rng3b, rng3m, rng3t, rng3Average, rng4b, rng4m, rng4t, rng4Average, rng1od1, rng1od2, rng1odAverage, rng2od1, rng2od2, rng2odAverage, rng3od1, rng3od2, rng3od3, rng3od4, rng3odAverage, rng4od1, rng4od2, rng4od3, rng4od4, rng4odAverage} = req.body

    try {
        const copper01 = await Copper01.create({
            batchID, set, postPass, spongePass, rng1b, rng1m, rng1t, rng1Average, rng2b, rng2m, rng2t, rng2Average, rng3b, rng3m, rng3t, rng3Average, rng4b, rng4m, rng4t, rng4Average, rng1od1, rng1od2, rng1odAverage, rng2od1, rng2od2, rng2odAverage, rng3od1, rng3od2, rng3od3, rng3od4, rng3odAverage, rng4od1, rng4od2, rng4od3, rng4od4, rng4odAverage
        })
        res.status(200).json(copper01)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = { getCopper01s, getCopper01, createCopper01 }