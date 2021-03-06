const { Router } = require('express');
const router = Router()
const DonationRoutes = require('./UserDonations')

router.use('/donate',DonationRoutes);

const userController = require('../controllers/Users')
const auth = require('../middlewares/auth');
const {userUpload} = require('../middlewares/multer')


router.post('/',userController.register);
router.post('/login',userController.login)
router.get('/allusers',userController.getAllUsers)
router.put('/',auth.authentication,userController.updateUser);
router.delete('/',auth.authentication,userController.deleteUser)
router.put('/image',auth.authentication,userUpload.single("photo"),userController.updateUserImage)


//category
const categoryRoutes = require('./category');
router.use('/category', categoryRoutes);

//campaign create
const campaignRoutes = require('./campaign');
router.use('/campaign', campaignRoutes);

//discover campaign
const campaignController = require('../controllers/Campaign');
router.get('/discover/all', campaignController.getAllCampaign);
router.get('/discover/category/:CategoryId', campaignController.getByCategory);
router.get('/discover/search', campaignController.getBySearch);

exports.router = router;
