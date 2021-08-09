const router = require('express').Router();

// GET all products
router.get('/', (req, res) => {
    res.send('products');
})


module.exports = router;