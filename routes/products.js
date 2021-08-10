const router = require('express').Router();
const { getProducts, addNewProduct, getProduct, removeProduct, updateProduct } = require('../controllers/ProductContoller');


// GET all products
router.get('/', async (req, res) => {
    const response = await getProducts();
    if (response.success) return res.status(200).json(response);
    else return res.status(404).json(response);
})

// GET specific product
router.get('/:id', async (req, res) => {
    const response = await getProduct(req.params.id);
    if (response.success) return res.status(200).json(response);
    else return res.status(404).json(response);
})

// Add new product
router.post('/new', async(req, res) => {
    const response = await addNewProduct({title: req.body.title, price: req.body.price, quantity: req.body.quantity, category_id: req.body.category_id, description: req.body.description});
    if (response.success) return res.status(200).json(response);
    else return res.status(404).json(response);
})
// update product
router.post('/edit/:id', async (req, res) => {
        let response = await updateProduct(req.params.id, req.body)
        if (response.success) return res.status(200).json(response);
        else return res.status(404).json(response);
});

// Remove product
router.delete('/:id', async (req, res) => {
        let response = await removeProduct(req.params.id)
        if (response.success) return res.status(200).json(response);
        else return res.status(404).json(response);
});


module.exports = router;