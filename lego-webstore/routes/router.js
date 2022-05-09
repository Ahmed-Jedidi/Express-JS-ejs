const express = require('express');
const router = express.Router();

const indexController = require('../controllers/indexController');

/* GET home page. */
router.get('/', indexController.index);

const productController = require('../controllers/productsController');
router.get('/produits', productController.products_list);
router.get('/produits/:idproduct', productController.products_infos);

const userController = require('../controllers/userController');
router.get('/inscription', userController.sign_up);


module.exports = router;
