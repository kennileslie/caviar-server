const express = require('express');
const itemController = require('../controllers/itemController');
const { protect, restrictTo } = require('../controllers/authController');

const router = express.Router();

router.use(protect);
router.use(restrictTo(['user']));

router.route('/').get(itemController.getAllItems).post(itemController.createItem);
router
	.route('/:id')
	.get(itemController.getItemById)
	.put(itemController.updateItemById)
	.delete(itemController.deleteItemById);

module.exports = router;
