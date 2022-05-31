const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({

    destination:(req, file, callback)=>{
        callback(null, path.join(__dirname, '../public'));
    },
        filename: (req, file, callback)=>{
            const ext = file.mimetype.split("/")[1]
            console.log(file.mimetype)
            callback(null, `${file.originalname}`)
        }
    })

const upload = multer({
    storage: storage
})
exports.uploadImage = upload.any();