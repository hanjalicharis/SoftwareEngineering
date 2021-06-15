const mongoose = require('mongoose');
const User = require('../models/usersModel');
const bcrypt = require('bcrypt');
const crypto = require('crypto');

module.exports.registerUser = async (req, res, next) => {
    if (!req.body.name || !req.body.email || !req.body.password) {
        res.status(400).send();
    } else {
        try {
            const user = await User.findOne({ email: req.body.email });
            if (user) {
                res.status(400).json({ error: "E-mail already exists in our database." });
            }
            else {
                const newUser = new User({
                    _id: new mongoose.Types.ObjectId(),
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password
                })

                newUser.password = require("crypto").createHash('md5').update(newUser.password).digest('hex');
                //console.log(newUser.password);
                await newUser.save();

                res.status(201).json({ message: "Succesfuly created the account!" });
            }
        } catch (err) {
            next(err);
        }
    }
}

module.exports.loginUser = async (req, res, next) => {
    if (!req.body.email || !req.body.password) {
        res.status(400).send();
    } else {
        try {
            const user = await User.findOne({ email: req.body.email });
            if (user) {

                hashedPassword = require("crypto").createHash('md5').update(req.body.password).digest('hex');
                if (hashedPassword === user.password) {
                    res.status(200).json({ message: "Valid password" });
                } else {
                    res.status(400).json({ error: "Invalid Password" });
                }
            }
            else {
                res.status(401).json({ error: "User does not exist" });
            }

        } catch (err) {
            next(err);
        }
    }
}

/*module.exports.updateUserById = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id).exec();
        console.log(user)
        if (user) {
            User.updateMany(
                { _id: req.params.id },
                {
                    $set: { name: req.body.name }
                }
            ).exec()
            res.status(200).send();
        } else {
            res.status(404).send();
        }
    } catch (err) {
        next(err);
    }
}*/
