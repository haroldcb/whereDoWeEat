'use strict';

const User = require('../models/user');

exports.RegisterUser = function(req, res, next) {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;

    if (!firstName) {
        return res.status(422).send({ error: 'You must enter a first name!'});
    }

    if (!lastName) {
        return res.status(422).send({ error: 'You must enter a name!'});
    }

    if (!email) {
        return res.status(422).send({ error: 'You must enter your email!'});
    }

    console.log("server : ",req.body);
    let newUser = new User({
        firstName: firstName,
        lastName: lastName,
        email: email,
        status: "Open",
    });

    newUser.save(function(err, user) {
        if(err) {return next(err);}

        res.status(201).json({ message: "Thanks! Your request was submitted successfuly!" });
        next();
    })
};