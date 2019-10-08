import bcrypt from "bcrypt";
import mongoose from "mongoose";

const saltrounds = 10;

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  cards: {
    type: [
      {
        cardName: { type: String, required: true, unique: true },
        locations: {
          type: [
            {
              location: { type: String, required: true, unique: true },
              quantity: { type: Number, required: true }
            }
          ],
          required: true
        }
      }
    ],
    required: true,
    default: []
  }
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
});

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
  bcrypt.compare(password, this.password, (err, same) => {
    if (err) callback(err);
    else callback(err, same);
  });
};

let User = mongoose.model("User", UserSchema);
export default User;
