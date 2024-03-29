import express from "express";
import multer from "multer";
const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'images/')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })


router.post('/',upload.single('file'), (req, res) => {
 res.send({message : "Upload"})
})


export default router;