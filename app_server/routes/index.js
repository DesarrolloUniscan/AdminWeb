const express = require('express');
const router = express.Router();
const controllerLogin = require('../controllers/login');
const controllerMenu = require('../controllers/menu');
const usersController= require('../controllers/users')
const productController = require('../controllers/producto')
const controllerSession = require('../controllers/session')

/* GET home page. */
router
    .route('/')
    .get(controllerSession.redirectMenu, controllerLogin.homePage)
    .post(controllerSession.redirectMenu ,controllerLogin.doLogin)

router
    .route('/menu')
    .get(controllerSession.redirectLogin,controllerMenu.menu)   


/* GET users listing. */
router.get('/usuarios', usersController.home);

router.get('/updateProduct', controllerSession.redirectLogin, productController.updateProduct);
router.get('/deleteProduct', controllerSession.redirectLogin, productController.deleteProduct);

router
    .route('/nuevoProducto')
    .get(productController.nuevoProducto)
    .post(productController.agregarProducto)

router.get('/logout', controllerSession.redirectLogin, controllerSession.logout);

module.exports = router;
