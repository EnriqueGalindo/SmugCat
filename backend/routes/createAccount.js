const router = require('express').Router();

router.route('/collector').get((req, res) => {
    res.send('Hello World -- This is where you are creating a collector')
});
router.route('/store').get((req, res) => {
    res.send('Hello World -- this is where you are creating a store')
});

module.exports = router;