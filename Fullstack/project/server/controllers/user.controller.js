const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


module.exports = {

    register: (req, res) => {

        const user = new User(req.body);

        user.save()
            .then((newUser) => {
                console.log(newUser);
                console.log("Successfully registered!");
                res.json({
                    successMessage: "Thank you for registering!",
                    user: newUser
                });
            })
            .catch((err) => {
                console.log("Register not successful")
                res.status(400).json(err);
            })
    },

    login: (req, res) => {
        User.findOne({email: req.body.email})
            .then((userRecord) => {
                if(userRecord === null) { // if email is not in database 
                    res.status(400).json({message: "Invalid Login Attempt!"})
                }
                else{ //email found
                    // does the password submitted match the password for the user on record? bcrpt compare to compare HASHED passwords
                    bcrypt.compare(req.body.password, userRecord.password) 
                        .then((isPasswordValid) => {
                            if(isPasswordValid) {
                                console.log("Password is valid");
                                res.cookie(
                                    "usertoken",
                                    jwt.sign( // information in cookie 
                                        {
                                            // payload data is data we want to save
                                            id: userRecord._id,
                                            email: userRecord.email,
                                            username: userRecord.username
                                        },
                                        // need a key to sign and hash cookie's data
                                        // payload needs secret key > .env file to store things privately
                                        // will not be added to public code
                                        process.env.JWT_SECRET                                       
                                    ),
                                    {   //client-side javascript invisible, cookies read by server only
                                        // clears cookie after certain time
                                        httpOnly: true,
                                        expires: new Date( Date.now() + 90000000)
                                    },
                                ).json({ //client
                                    message: "Successfully logged in",
                                    userLoggedIn : userRecord.username,
                                    userId : userRecord._id
                                });
                            }
                            else{
                                res.status(400).json({
                                    message: "Login and/or Email Invalid"
                                })
                            }
                        })
                        .catch((err) => {
                            console.log(err);
                            res.status(400).json({message: "Invalid Attempt!"});
                        })
                }
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json({message: "Invalid Attempt!"});
            })
    },

    getUser: (req,res) => {
        User.findOne({ _id: req.params.id })
            .then((oneUser) => {
                console.log(oneUser);
                res.json(oneUser);
            })
            .catch((err)=> {
                console.log(err);
                res.status(400).json(err);
            })
    },

    logout: (req, res) => {
        console.log("logging out");
        res.clearCookie("usertoken");
        res.json({
            message: "Successfully logged out"
        })
    },


}
