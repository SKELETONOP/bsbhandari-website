const express = require('express');
const storeRouter = express.Router();

const storeController = require('../controllers/storeController');

// Define routes
storeRouter.get('/', storeController.getHome);
storeRouter.get('/about', storeController.getAbout);
storeRouter.get('/services', storeController.getServices);
storeRouter.get('/events', storeController.getEvents);
storeRouter.get('/youtube', storeController.getYoutube);
storeRouter.get('/contact', storeController.getContact);


module.exports = storeRouter;