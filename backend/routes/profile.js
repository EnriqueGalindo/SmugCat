const router = require('express').Router();

router.route('/').get((req, res) => {
    res.send('Hello World -- this is your profile')
});
router.route('/nearMe').get((req, res) => {
    res.send('Hello World -- this is the near me section of your profile')
});

module.exports = router;