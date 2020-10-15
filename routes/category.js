const {Router} = require('express');
const router = Router();
const categoryController = require('../controllers/Category');
const {categoryUpload} = require('../middlewares/multer');
const auth = require('../middlewares/auth');

router.get('/', categoryController.getAllCategory);
router.post('/add', categoryUpload.single('image'), categoryController.addCategory);
router.put('/edit/:id', categoryUpload.single('image'), categoryController.editCategory);
router.delete('/delete/:id', categoryController.deleteCategory);

module.exports = router;