const express = require('express');
const { getAboutUs, createAboutUs, updateAboutUS, deleteAboutUs } = require('../modules/aboutUs');
const { uploadImage } = require('../utils/multer');
const router = express.Router();


router.get('/new', getAboutUs)
router.post('/new', uploadImage ,createAboutUs)
router.put('/new', uploadImage ,updateAboutUS)
router.delete('/new',deleteAboutUs)


module.exports = router
