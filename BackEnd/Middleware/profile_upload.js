const path = require('path');
const multer = require('multer');

// storing files in uploads folder
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'Uploads/')
    },
    filename: function(req, file, cb) {
        let ext = path.extname(file.originalname)
        cb(null, Date.now() + ext)
    }
})

// accepting files in png, jpeg, jpg and 3 mb file size
const uploads = multer ({
    storage: storage,
    fileFilter: function(req, file, callback) {
        if(
            file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg"
        ) {
            callback(null, true)
        } else {
            console.log('jpg, png files are supported');
            callback(null, false);
        }
    },
    limits: {
        fileSize: 1024 * 1024 * 3
    }
})

module.exports = uploads;