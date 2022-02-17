let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to our Contacts Model
let Contacts = require('../models/business_contacts');

module.exports.displayContactsList = (req, res, next) => {
    Contacts.find((err, contactsList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(contactList);

            res.render('business_contacts/list', {title: 'Contacts List', ContactsList: contactsList})            
        }
    });
}

module.exports.displayAddPage = (req, res, next) => {
    res.render('business_contacts/add', {title: 'Add Contact'})  

}

module.exports.processAddPage = (req, res, next) => {
    let newContacts = Contacts({
        "contact_name": req.body.contact_name,
        "contact_number": req.body.contact_number,
        "email_address": req.body.email_address,
        
    });

    Contacts.create(newContacts, (err, Contacts) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the contact list
            res.redirect('/contacts-list')
        }
    })
}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Contacts.findById(id, (err, contactToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // show the edit view
            res.render('business_contacts/edit', {title: 'Edit Contact', contacts: contactToEdit})
        }
    });
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedContact = Contacts({
        "_id": id,
        "contact_name": req.body.contact_name,
        "contact_number": req.body.contact_number,
        "email_address": req.body.email_address,
    }); 

    Contacts.updateOne({_id: id}, updatedContact, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the contact list
            res.redirect('/contacts-list')
        }
    });
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Contacts.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the contact list
            res.redirect('/contacts-list')
        }
    });
}