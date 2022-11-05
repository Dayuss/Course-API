const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Hello World!')
})

router.use('/api/course', require("../controller/courseController"))
module.exports = router;