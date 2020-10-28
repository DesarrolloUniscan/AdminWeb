const express = require('express')
const router = express.Router();
const usuarioController = require('../controllers/usuario');

router
    .route('/usuario')
    .get(usuarioController.userList)
    .post(usuarioController.userCreate)
router
    .route('/usuario/:usuarioid/:password')
    .get(usuarioController.userRead)

module.exports = router;