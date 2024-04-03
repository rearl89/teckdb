const express = require('express')
const { getCopper09s, getCopper09, createCopper09, deleteCopper09, updateCopper09 } = require('../controllers/copper09Controller')

const router = express.Router()

router.get('/', getCopper09s)

router.get('/:id', getCopper09)

router.post('/', createCopper09)

router.delete('/:id', deleteCopper09)

router.patch('/:id', updateCopper09)

module.exports = router