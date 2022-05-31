const express = require('express');
const { getProject, createProject, updateProject, deleteProject } = require('../modules/Project');
const { uploadImage } = require('../utils/multer');
const router = express.Router();


router.get('/', getProject)
router.post('/', uploadImage ,createProject)
router.put('/', uploadImage ,updateProject)
router.delete('/', deleteProject)


module.exports = router
