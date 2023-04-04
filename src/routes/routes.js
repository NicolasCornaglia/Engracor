const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');

// Vistas generales 
router.get('/', mainController.displayHome);
router.get('/about', mainController.displayAbout);
router.get('/contact', mainController.displayContact);
router.get('/products', mainController.displayProducts);

module.exports = router;
