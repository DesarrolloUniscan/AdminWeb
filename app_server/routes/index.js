const express = require('express');
const router = express.Router();
const controllerLogin = require('../controllers/login');
const controllerMenu = require('../controllers/menu');
const usersController= require('../controllers/users')

/* GET home page. */
router
    .route('/')
    .get(controllerLogin.homePage)
    .post(controllerLogin.doLogin)

router
    .route('/menu')
    .get(controllerMenu.menu)


/* GET users listing. */
router.get('/usuarios', usersController.home);

module.exports = router;
