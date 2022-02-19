/*Adrian Posadas
301220353
02/19/2022
business_contacts.js
*/

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');

let contactsController = require('../controllers/business_contacts');

//he;per function for guard purposes
function requireAuth(req, res, next)
{
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

/* GET Route for the Contacts List page - READ OPeration */
router.get('/',requireAuth, contactsController.displayContactsList);

/* GET Route for displaying the Add page - CREATE OPeration */
router.get('/add', requireAuth, contactsController.displayAddPage);

/* POST Route for processing the Add page - CREATE OPeration */
router.post('/add', requireAuth, contactsController.processAddPage);

/* GET Route for displaying the Edit page - UPDATE OPeration */
router.get('/edit/:id', requireAuth, contactsController.displayEditPage);

/* POST Route for processing the Edit page - UPDATE OPeration */
router.post('/edit/:id', requireAuth, contactsController.processEditPage);

/* GET to perform Deletion - DELETE OPeration */
router.get('/delete/:id', requireAuth, contactsController.performDelete);

module.exports = router;