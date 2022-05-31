const express = require('express');
const { updateCover, createCover, getCover, deleteCover } = require('../modules/startingcover');
const { uploadImage } = require('../utils/multer');
const router = express.Router();


router.get('/', getCover)
router.post('/', uploadImage ,createCover)
router.put('/', uploadImage ,updateCover)
router.delete('/', deleteCover)


module.exports = router
