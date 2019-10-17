const router = require("express").Router();
const User = require("../models/user.model");

router.route("/").post((req, res) => {
    User.findOne({
      email: req.body.email
    })
      .then(user => {
        if (!user) throw "User does not exist"
        return user.isCorrectPassword(req.body.password).then(match => {
          if (!match) throw "Incorrect password"
          res.send(user)
        })
      })
      .catch(err => res.status(400).json("Error: " + err));
  });
  
module.exports = router;
