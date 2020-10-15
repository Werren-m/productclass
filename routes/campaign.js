const {Router} = require('express');
const router = Router();
const campaignController = require('../controllers/Campaign');
const {campaignUpload} = require('../middlewares/multer');
const auth = require('../middlewares/auth');


router.post('/add',auth.authentication, campaignUpload.single('header_img'), campaignController.addCampaign);
router.put('/edit/:id', campaignUpload.single('header_img'), campaignController.editCampaign);
router.delete('/delete/:id', campaignController.deleteCampaign);

module.exports = router;