const express = require('express');
const { getEvent, createEvent, updateEvent, deleteEvent } = require('../modules/event');
const { uploadImage } = require('../utils/multer');
const router = express.Router();


router.get('/', getEvent)
router.post('/', uploadImage ,createEvent)
router.put('/', uploadImage ,updateEvent)
router.delete('/', deleteEvent)


module.exports = router
