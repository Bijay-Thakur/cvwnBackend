const express = require('express');
const { getArticle, createArticle, updateArticle, deleteArticle } = require('../modules/Article');
const { uploadImage } = require('../utils/multer');
const router = express.Router();


router.get('/', getArticle)
router.post('/', uploadImage ,createArticle)
router.put('/', uploadImage ,updateArticle)
router.delete('/', deleteArticle)


module.exports = router
