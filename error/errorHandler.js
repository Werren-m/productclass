const apiError = require('./apiError')

function errorHandler(err,req,res,next){
    console.error(err)
    if(err instanceof apiError){
        res.status(err.status).json(err.message);
        return;
    }else{
        res.status(err.status).json(err.message);
    }
    // res.status(500).json("something went wrong");
}


module.exports = errorHandler;