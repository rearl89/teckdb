const express = require('express')
const { getCopper01s, getCopper01, createCopper01 } = require('../controllers/copper01Controller')

const router = express.Router()

router.get('/', getCopper01s)

router.get('/:id', getCopper01)

router.post('/', createCopper01)

router.delete('/:id', (req, res) => {
    res.json({message: 'delete a copper01'})
})

router.patch('/:id', (req, res) => {
    res.json({message: 'update a copper01'})
})

module.exports = router