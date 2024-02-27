const express = require('express')
const { getCopper01s, getCopper01, createCopper01, deleteCopper01, updateCopper01 } = require('../controllers/copper01Controller')

const router = express.Router()

router.get('/', getCopper01s)

router.get('/:id', getCopper01)

router.post('/', createCopper01)

router.delete('/:id', deleteCopper01)

router.patch('/:id', updateCopper01)

module.exports = router