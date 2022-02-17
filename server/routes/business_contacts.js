let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to our Contacts Model
let Contacts = require('../models/business_contacts');

let contactsController = require('../controllers/business_contacts')

/* GET Route for the Contacts List page - READ OPeration */
router.get('/', contactsController.displayContactsList);

/* GET Route for displaying the Add page - CREATE OPeration */
router.get('/add', contactsController.displayAddPage);

/* POST Route for displaying the Add page - CREATE OPeration */
router.post('/add', contactsController.processAddPage);

/* GET Route for displaying the Edit page - UPDATE OPeration */
router.get('/edit/:id', contactsController.displayEditPage);

/* POST Route for displaying the Edit page - UPDATE OPeration */
router.post('/edit/:id', contactsController.processEditPage);

/* GET to perform Deletion - DELETE OPeration */
router.get('/delete/:id', contactsController.performDelete);

module.exports = router;