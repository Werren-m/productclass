const { Category } = require('../models');

class categoryController {
    static async getAllCategory(req,res,next){
        try{
            const found = await Category.findAll({});
            if(found){
                res.status(200).json(found);
            } else{
                res.status(400).json({message: "failed to retrieve category"})
            }
        } catch (err){
            res.status(500).json(err.message)
        }
    }

    static async addCategory(req,res,next){
        const { name } = req.body;
        //const image = req.file.path;
        const image = "https://infinite-reef-41011.herokuapp.com/"+req.file.path;
        try {
            const search = await Category.findOne({
                where: { name }
            })
            if(search){
                res.status(409).json({message: "category already exist!"})
            } else{
                const add = await Category.create({
                    name,
                    image
                })
                res.status(200).json(add);   
            }
        } catch (err) {
            res.status(500).json(err.message)
        }
    }

    static async editCategory(req,res,next){
        const id = req.params.id;
        const { name } = req.body;
        //const image = req.file.path;
        const image = "https://infinite-reef-41011.herokuapp.com/"+req.file.path;
        try {
            const edit = await Category.update({
                name,
                image
            }, {
                where: { id }
            })
            if(edit){
                const found = await Category.findOne({where: {id}})
                res.status(200).json(found)
            }
        } catch (err) {
            res.status(500).json(err.message)
        }
    }

    static async deleteCategory(req,res,next){
        const id = req.params.id;
        try {
            const search = await Category.destroy({where: {id}})
            if(search){
                res.status(200).json({message: "category deleted"})
            } else{
                res.status(400).json({message: "category deleted failed"})
            }
        } catch (err) {
            res.status(500).json(err.message)
        }
    }


}

module.exports = categoryController;