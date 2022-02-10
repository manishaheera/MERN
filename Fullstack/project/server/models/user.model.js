const mongoose = require("mongoose");
const bcrypt = require("bcrypt");


const UserSchema = new mongoose.Schema ({

    username: {
        type: String,
        required: [true, "Username is required!" ],
    },

    email: {
        type: String,
        required: [true, "Email address is required!" ],
    },

    password: {
        type: String,
        required: [true, "Password is required!"],
        minLength: [8, "Password MUST be at least 8 characters"]
    }

}, {timestamps: true}) 

// virtual field, stores information during request but not in database/collection 

UserSchema.virtual("confirmPassword")
    .get(()=> this._confirmPassword)
    .set((value) => this._confirmPassword = value)

UserSchema.pre("validate", function(next) {

    if(this.password !== this.confirmPassword) {
        this.invalidate("confirmPassword", "Passwords must match!")
        console.log("Passwords don't match!")
    }
    next()
})

UserSchema.pre("save", function(next){
    console.log("in pre save");

        bcrypt.hash(this.password, 10)
            .then((hashedPassword) => {
            // give our password the value of the hashed password
            this.password = hashedPassword;
            next()
            })
})

const User = mongoose.model("User", UserSchema);
module.exports = User;