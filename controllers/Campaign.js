const { Campaigns, Category } = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

class campaignController {
    static async getAllCampaign(req,res,next){
        try{
            const found = await Campaigns.findAll({
                order: [['id', 'DESC']],
                include: {
                    model: Category,
                    attributes: ['name', 'image']
                }
            });
            if(found){
                res.status(200).json(found);
            } else{
                res.status(400).json({message: "failed to retrieve campaign"})
            }
        } catch (err){
            res.status(500).json(err.message)
        }
    }

    static async addCampaign(req,res,next){
        const { title, goal, story, due_date, CategoryId, bankAccount } = req.body;
        const header_img = "https://infinite-reef-41011.herokuapp.com/"+req.file.path;
        const UserId = req.userData.id;
        try {
            const search = await Campaigns.findOne({where: { title }})
            if(search){
                res.status(409).json({message: "campaign already exist!"})
            } else{
                const add = await Campaigns.create({
                    title,
                    goal,
                    story,
                    due_date,
                    header_img,
                    CategoryId,
                    UserId,
                    bankAccount
                })
                res.status(200).json(add);   
            }
        } catch (err) {
            res.status(500).json(err.message)
        }
    }

    static async editCampaign(req,res,next){
        const id = req.params.id;
        const { title, goal, story, due_date, CategoryId, bankAccount} = req.body;
        const header_img = "https://infinite-reef-41011.herokuapp.com/"+req.file.path;
        try {
            const edit = await Campaigns.update({
                title,
                goal,
                story,
                due_date,
                header_img,
                bankAccount,
                CategoryId
            }, {
                where: { id }
            })
            if(edit){
                const found = await Campaigns.findOne({where: {id}})
                res.status(200).json(found)
            }
        } catch (err) {
            res.status(500).json(err.message)
        }
    }

    static async deleteCampaign(req,res,next){
        const id = req.params.id;
        try {
            const search = await Campaigns.destroy({where: {id}})
            if(search){
                res.status(200).json({message: "campaign deleted"})
            } else{
                res.status(400).json({message: "campaign deleted failed"})
            }
        } catch (err) {
            res.status(500).json(err.message)
        }
    }

    static async getByCategory(req,res,next){
        const CategoryId = req.params.CategoryId;
        try {
            const found = await Campaigns.findAll({
                order: [['id', 'DESC']],
                where: { CategoryId }
            })
            if(found){
                res.status(200).json(found)
            } else{
                res.status(400).json({message: "category not found!"})
            }
        } catch (err) {
            res.status(500).json(err.message)
        }
    }

    static async getBySearch(req,res,next){
        const { title } = req.query;
        try {
            const found = await Campaigns.findAll({
                order: [['id', 'DESC']],
                where: {
                    title: {
                        [Op.iLike]: '%' + title + '%'
                    }
                }
            })
            if(found == ''){
                res.status(400).json({message: "campaign not found!"})
                //res.status(200).json(found)
            } else{
                res.status(200).json(found)
                //res.status(400).json({message: "campaign not found!"})
            }
        } catch (err) {
            res.status(500).json(err.message)
        }
    }


}

module.exports = campaignController;