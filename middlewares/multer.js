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

const categoryStorage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, "./uploads/category")
    },
    filename: function(req,file,cb){
        cb(null, Date.now() + "-" + file.originalname);
    }
})

const categoryUpload = multer({
    storage: categoryStorage,
    fileFilter: fileFormatLimit
})

const campaignStorage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, "./uploads/campaign")
    },
    filename: function(req,file,cb){
        cb(null, Date.now() + "-" + file.originalname);
    }
})

const campaignUpload = multer({
    storage: campaignStorage,
    fileFilter: fileFormatLimit
})

module.exports = {
    userUpload, categoryUpload, campaignUpload
};