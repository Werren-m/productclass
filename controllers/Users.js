const {Users} = require('../models')
const ApiError = require('../error/apiError');
const {decryptPwd} = require('../helpers/bcrypt')
const {tokenGenerator} = require('../helpers/jwt')

class userController{
    static async register(req,res,next){
        const {email,password,name} = req.body;
        email == null ? res.status(400).json({message: "Email field is required"}) : "" ;
        password == null ? res.status(400).json({message: "Password field is required"}) : "" ;
        name == null ? res.status(400).json({message: "Name field is required"}) : "" ;

        try{
            const found = await Users.findOne({where: {email}})
            if(found){
                res.status(400).json({message: "Email already in use"});
            }
            const user = await Users.create(req.body)
            if(user){
                const token = tokenGenerator(user)
                res.status(200).json({token});
            }else{
                // next(ApiError.badRequest("There is something wrong with the input"))
                res.status(400).json({message: "There is something wrong with the input"});
            }
        }catch(err) { next(err) }

        // res.status(500).json({message: err.message}) 
        // try{
        //     const user = await Users.create({
                
        //     })
        // }
    }

    static async login(req,res,next){
        const {email,password} = req.body;
        email == null ? "Email field is required" : email;
        password == null ? "Password field is required" : password;

        try{
            const found = await Users.findOne({where: {email}})
            if(found){
                if(decryptPwd(password,found.password)){
                    const token = tokenGenerator(found);
					res.status(200).json({ token });
                }                                
            }else{
                res.status(404).json({message: "Email not found"})
            }
        }catch(err){res.status(500).json(err.message)}     
    }

    static async deleteUser(req,res,next){
        const {id} = req.userData;
        try{
            const boom = await Users.destroy({where: {id}})
            if(boom){
                res.status(200).json({msg: "Deleted"})
            }else{
                res.status(400).json({msg: "Delete failed"})
            }
        }catch(err){res.status(500).json(err.message)}
    }

    static async updateUser(req,res,next){
        const {id} = req.userData;
        try{
            const update = await Users.update((req.body),{where: {id}})
            if(update){
                const user = Users.findOne({where: {id}})
                const token = tokenGenerator(user)
                res.status(200).json({token})
            }
        }catch(err){res.status(500).json(err.message)}
    }

    static async updateUserImage(req,res,next){
        const {id} = req.userData;
        const photo = "localhost:3000/"+req.file.path;
        try{
            const update = await Users.update({photo},{where: {id}})
            if(update){
                const user = Users.findOne({where: {id}})
                const token = tokenGenerator(user)
                res.status(200).json({token})
            }
        }catch(err){res.status(500).json(err.message)}
    }
}

module.exports = userController;