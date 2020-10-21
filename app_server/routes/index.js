const express = require('express');
const router = express.Router();
const controllerLogin = require('../controllers/login')
/* GET home page. */
router.get('/', controllerLogin.login);

module.exports = router;
