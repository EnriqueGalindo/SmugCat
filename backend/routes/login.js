const router = require('express').Router();

router.route('/').get((req, res) => {
    res.send(`Hello World -- from login
    The 'create' button will need to send the user to /create/collector or /create/store`)
});

module.exports = router;