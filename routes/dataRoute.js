const express = require('express');
const dataRouter = express.Router();

const dataController = require('../controllers/dataController');

// Define routes
dataRouter.post('/submit-contact-form', dataController.postFormData);
dataRouter.get('/appointment', dataController.getAppointment);
dataRouter.post('/submit-appointment', dataController.postAppointment);


module.exports = dataRouter;