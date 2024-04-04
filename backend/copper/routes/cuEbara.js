const express = require('express')
const { getCuEbaras, getCuEbara, createCuEbara, deleteCuEbara, updateCuEbara } = require('../controllers/cuEbaraController')

const router = express.Router()

router.get('/', getCuEbaras)

router.get('/:id', getCuEbara)

router.post('/', createCuEbara)

router.delete('/:id', deleteCuEbara)

router.patch('/:id', updateCuEbara)

module.exports = router