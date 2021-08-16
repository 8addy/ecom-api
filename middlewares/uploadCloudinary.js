const multer  = require('multer');
const cloudinary  = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

  const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    // transformation: [{ width: 500, height: 500, crop: "limit" }],
    params: {
        folder: (req, file) => 'ecomm',
        use_filename: true,
        filename_override: (req, file) => file.originalname,
        // allowedFormats: ["jpg", "png"],
        allowedFormats: (req, file) => ["jpg", "png"]
      },
    });

const upload = multer({ storage: storage })

module.exports = upload;