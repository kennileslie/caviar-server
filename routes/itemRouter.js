const express = require('express');
const itemController = require('../controllers/itemController');
const { protect, restrictTo } = require('../controllers/authController');

const router = express.Router();

// router.use(protect);
// router.use(restrictTo(['admin']));

router
  .route('/')
  .get(itemController.getAllItems)
  .post(protect, restrictTo(['admin']), itemController.createItem);
router
  .route('/:id')
  .get(protect, restrictTo(['admin']), itemController.getItemById)
  .put(protect, restrictTo(['admin']), itemController.updateItemById)
  .delete(protect, restrictTo(['admin']), itemController.deleteItemById);

module.exports = router;
