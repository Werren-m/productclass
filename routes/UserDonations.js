const { Router } = require('express')
const router = new Router()

const UserDonationController = require ('../controllers/UserDonationsController')

router.get('/add',UserDonationController.donate)
module.exports= router