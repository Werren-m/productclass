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


exports.router = router;
