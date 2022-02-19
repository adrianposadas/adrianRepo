/*Adrian Posadas
301220353
02/19/2022
business_contacts.js
*/

let mongoose = require('mongoose');

// create a model class
let contactsModel = mongoose.Schema({
    contact_name: String,
    contact_number: Number,
    email_address: String,
    
},
{
    collection: "contacts"
});

module.exports = mongoose.model('Contacts', contactsModel);