/*Adrian Posadas
301220353
02/19/2022
users.js
*/

// require modules for the User Model
let mongoose = require('mongoose');
let plm = require('passport-local-mongoose');

let User = mongoose.Schema
(
    {
        username: 
        {
            type: String,
            default: '',
            trim: true,
            requuired: 'username is required'
        },
        /*
        password: 
        {
            type: String,
            default: '',
            trim: true,
            requuired: 'password is required'
        }
        */
        email:
        {
        type: String,
        default: '',
        trim: true,
        requuired: 'email is required'
        },
        displayName:
        {
        type: String,
        default: '',
        trim: true,
        requuired: 'Display Name is required'
        },
        created:
        {
        type: Date,
        default: Date.now
        },
        update:
        {
        type: Date,
        default: Date.now
        },
    },
    {
        collection: "users"  
    }
);

// configure options for User Model

let options = ({ missingPasswordError: 'Wrong / Missing Password'});

User.plugin(plm, options);

module.exports.User = mongoose.model('User',User);