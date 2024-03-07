const express = require('express')
const { getCopper200s, getCopper200, createCopper200, deleteCopper200, updateCopper200 } = require('../controllers/copper200Controller')

const router = express.Router()

router.get('/', getCopper200s)

router.get('/:id', getCopper200)

router.post('/', createCopper200)

router.delete('/:id', deleteCopper200)

router.patch('/:id', updateCopper200)

module.exports = router