const multer = require('multer');

const fileFormatLimit = (req,file,cb) => {
    if(file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg" || file.mimetype === "image/svg"){
        cb(null,true)
    }else{
        cb(null,false)
    }     
}

const uploadStorage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, "./uploads/user")
    },
    filename: function(req,file,cb){
        cb(null, Date.now() + "-" + file.originalname);
    }
})

const userUpload = multer({
    storage: uploadStorage,
    fileFilter: fileFormatLimit
})


module.exports = {
    userUpload
};