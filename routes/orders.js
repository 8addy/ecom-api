const router = require('express').Router();
const { getOrders, addNewOrder, removeOrder } = require('../controllers/OrdersController');


// GET all orders
router.get('/', async (req, res) => {
    const response = await getOrders();
    if (response.success) return res.status(200).json(response);
    else return res.status(404).json(response);
})

// Add new order
router.post('/new', async(req, res) => {
    const response = await addNewOrder(req);
    if (response.success) return res.status(200).json(response);
    else return res.status(404).json(response);
})

// Remove order
router.delete('/:id', async (req, res) => {
    let response = await removeOrder(req.params.id)
    if (response.success) return res.status(200).json(response);
    else return res.status(404).json(response);
});

module.exports = router;