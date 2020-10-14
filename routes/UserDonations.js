const { Router } = require('express')
const router = new Router()

const UserDonationController = require ('../controllers/UserDonationsController')

router.get('/add/:id',UserDonationController.donate)
module.exports= router