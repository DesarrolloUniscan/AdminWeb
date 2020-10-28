const express = require('express')
const router = express.Router();
const usuarioController = require('../controllers/usuario');
const productosController = require('../controllers/producto')

router
    .route('/usuario')
    .get(usuarioController.userList)
    .post(usuarioController.userCreate)
router
    .route('/usuario/:usuarioid/:password')
    .get(usuarioController.userRead)

router
    .route('/producto')
    .get(productosController.productList)
    .post(productosController.productCreate)
router
    .route('/producto/:productoid')
    .get(productosController.productRead)


module.exports = router;