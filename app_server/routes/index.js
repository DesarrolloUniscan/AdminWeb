const express = require('express');
const router = express.Router();
const controllerLogin = require('../controllers/login');
/* GET home page. */
router
    .route('/')
    .get(controllerLogin.homePage)
    .post(controllerLogin.homePage)


module.exports = router;
