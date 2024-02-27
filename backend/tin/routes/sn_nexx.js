const express = require('express')
const { getSn_Nexxs, getSn_Nexx, createSn_Nexx, deleteSn_Nexx, updateSn_Nexx } = require('../controllers/sn_nexxController')

const router = express.Router()

router.get('/', getSn_Nexxs)

router.get('/:id', getSn_Nexx)

router.post('/', createSn_Nexx)

router.delete('/:id', deleteSn_Nexx)

router.patch('/:id', updateSn_Nexx)

module.exports = router