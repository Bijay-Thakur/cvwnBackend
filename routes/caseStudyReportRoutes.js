const express = require('express');
const { getCaseStudyReport, createCaseStudyReport, updateCaseStudyReport, deleteCaseStudyReport } = require('../modules/caseStudyReport');
const { uploadImage } = require('../utils/multer');
const router = express.Router();


router.get('/new', getCaseStudyReport)
router.post('/new', uploadImage ,createCaseStudyReport)
router.put('/new', uploadImage ,updateCaseStudyReport)
router.delete('/new',deleteCaseStudyReport)


module.exports = router
