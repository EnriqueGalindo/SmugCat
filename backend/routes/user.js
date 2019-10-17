const router = require('express').Router();
let User = require('../models/user.model');

//Please do not change this file unless you know what your about to break.
//

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.send(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    
    const email = req.body.email
    const password = req.body.password
    // const username = req.body.username

    const newUser = new User({ password, email });

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;