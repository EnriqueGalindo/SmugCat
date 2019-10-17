const router = require('express').Router();

router.route('/').get((req, res) => {
    res.send('Hello World -- this is where you look for things to buy and sell')
});

router.route('/other').get((req, res) => {
    res.send('Hello World -- this is the page that is on top of store front. I do not know what it is supposed to represent? lol')
});

module.exports = router;