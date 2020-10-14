const { UserDonations, Users , Campaigns } = require ('../models')

class UserDonationController {
    static async donate (req, res, next) {
        const User_Id = req.userData.id
        const  Campaign_Id  = req.params.id
        const { amount, share, comment } = req.body
        try {
            //Validasi apakah Campaigns ada
            const validCampaign = await Campaigns.findOne({
                where : {
                    id : Campaign_Id
                }
            })
            if (validCampaign) {
                //Validasi apakah goals sudah tercapai
                if(validCampaign.raised < validCampaign.goal){
                    //pengecekan sisa yang dibutuhkan
                    const expected = validCampaign.goal - validCampaign.raised;
                    if (expected == 0) {
                        res.status(400)({
                            Success : false,
                            message : "This Campaign's goal has been acheived"
                        })
                    } else {
                        if(amount > expected){
                            res.status(400).json({
                                Success : false,
                                message : `This Campaign only need Rp. ${expected} more, please use the rest of your money for other Campaigns`
                            })
                        } else {
                            const add = await UserDonations.create({
                                User_Id,
                                Campaign_Id,
                                amount,
                                share,
                                comment
                            })
                            const raisedData = await Campaigns.findOne({
                                where: {
                                    id : Campaign_Id
                                }
                            })
                            const raisedBefore = raisedData.raised;
                            const raisedAfter = raisedBefore + amount;
                            const addRaised = await Campaigns.update({
                                raised: raisedAfter},{
                                where: {
                                    id : Campaign_Id
                                }
                            })
                            res.status(400).json({
                                Success : true,
                                message : `Thank you for donating Rp. ${amount} for this campaign`
                            })
                        }
                        } 
                    }
            } else {
                res.status(404).json({
                    Success : false,
                    message: "Campaign not Found"
                })
            }
        }
        catch (err) {
            next(err)
        }
    }
    static async getUserDonationData (req, res, next) {
        const User_Id = req.userData.id
        try {
            const found = await UserDonations.findAll({
                where : {
                    User_Id : User_Id
                }, include : [Campaigns]
            })
            res.status(200).json({
                Success : true,
                Result : found
            })
        } catch (err) {
            next(err)
        }
    }
}
module.exports = UserDonationController