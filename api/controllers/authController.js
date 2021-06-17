const { promisify } = require("util");
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const jwt = require("jsonwebtoken");
const User = require("../models/usersModel");

const JWT_SECRET = "hanjalicharis";
const JWT_EXPIRES_IN = 3600;


const createToken = id => {
    return jwt.sign(
        {
            id,
        },
        JWT_SECRET,
        {
            expiresIn: JWT_EXPIRES_IN
        },
    );
};

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

                    const token = createToken(user.id);
                    user.password = undefined;

                    res.status(200).json({
                        status: "success",
                        token
                    });
                }
                else {
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

exports.protect = async (req, res, next) => {
    try {
        // 1) check if the token is there
        let token;
        if (
            req.headers.authorization &&
            req.headers.authorization.startsWith("Bearer")
        ) {
            token = req.headers.authorization.split(" ")[1];
        }
        if (!token) {
            return next(
                new AppError(
                    401,
                    "fail",
                    "You are not logged in! Please login in to continue",
                ),
                req,
                res,
                next,
            );
        }

        // 2) Verify token
        const decode = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

        // 3) check if the user is exist (not deleted)
        const user = await User.findById(decode.id);
        if (!user) {
            return next(
                new AppError(401, "fail", "This user is no longer exist"),
                req,
                res,
                next,
            );
        }

        req.user = user;
        next();
    } catch (err) {
        next(err);
    }
};

