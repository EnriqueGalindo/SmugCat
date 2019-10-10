const bcrypt = require ("bcrypt")
const mongoose = require("mongoose")
const saltrounds = 10; //Password hashing.

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, sparse: true, trim: true },
    password: { type: String, required: true, trim: true, unique: false, sparse: false },
    cards: {
        type: [
            {
            cardName: { type: String, required: true, unique: false, sparse: false },
            locations: {
                type: [
                {
                    location: { type: String, required: true, unique: false, sparse: false },
                    quantity: { type: Number, required: true, unique: false, sparse: false }
                }
        ],
        required: true
        }
    }
    ],
    required: true,
    default: []
}});
/*
        cards data structure
        Array<{ cardName: String, locations: Array<{ location: String, quantity: Number }>}>

        [{ cardName: "SameCard", locations: [{ location: "B2", quantity: 3 }] }]
        data structure -> UI
        
    */

/* 
        register endpoint
        request body: { email: String, password: String }
        response body: nothing (200 status code OK)

        login endpoint 
        request body: { email: String, password: String }
        response body: { email: String, password: String, cards: [{ cardName: "SameCard", locations: [{ location: "B2", quantity: 3 }] }] }

        // POST - addCard endpoint
        // request body: { cardName: "SameCard", location: "B2" }
        // response body: { cardName: "SameCard", locations: [{ location: "B2", quantity: 4 }] }

        // DELETE - removeCard endpoint
    */

//Not 100% as to what all is going on here, looks like the password is being encyrpted, salted, and passed on to the DB
//Then is the correct password is provided then we don't get an error I guess.
UserSchema.pre("save", function(next) {
    if (this.isNew || this.isModified("password")) {
        const document = this;
        bcrypt.hash(document.password, saltrounds, function(err, hashedPassword) {
            if (err) next(err);
            else {
                document.password = hashedPassword;
                next();
            }
        });
    } else {
    next();
    }
});
UserSchema.methods.isCorrectPassword = function(password, callback) {
    return bcrypt.compare(password, this.password);
};

let User = mongoose.model("User", UserSchema);
module.exports = User;
