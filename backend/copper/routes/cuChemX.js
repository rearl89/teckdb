const express = require('express')
const { getCuChemXs, getCuChemX, createCuChemX, deleteCuChemX, updateCuChemX } = require('../controllers/cuChemXController')

const router = express.Router()

router.get('/', getCuChemXs)

router.get('/:id', getCuChemX)

router.post('/', createCuChemX)

router.delete('/:id', deleteCuChemX)

router.patch('/:id', updateCuChemX)

module.exports = router