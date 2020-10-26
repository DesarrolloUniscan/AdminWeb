const express = require('express');
const router = express.Router();
const controllerLogin = require('../controllers/login');
const controllerMenu = require('../controllers/menu');
/* GET home page. */
router
    .route('/')
    .get(controllerLogin.homePage)
    .post(controllerLogin.homePage)

router
    .route('/menu')
    .get(controllerMenu.menu)
module.exports = router;
