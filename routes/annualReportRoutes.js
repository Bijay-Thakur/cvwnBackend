const express = require('express');
const { getAnnualReport, createAnnualReport, updateAnnualReport, deleteAnnualReport } = require('../modules/annualReport');
const { uploadImage } = require('../utils/multer');
const router = express.Router();


router.get('/new', getAnnualReport)
router.post('/new', uploadImage ,createAnnualReport)
router.put('/new', uploadImage ,updateAnnualReport)
router.delete('/new',deleteAnnualReport)


module.exports = router
