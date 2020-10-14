const { Router } = require('express');
const router = Router()
const DonationRoutes = require('./UserDonations')

router.use('./donate',DonationRoutes);

module.exports = router