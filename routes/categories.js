const router = require('express').Router();
const { getCategories, addNewCategory } = require('../controllers/CategoriesController');


// GET all categories
router.get('/', async (req, res) => {
    const response = await getCategories();
    if (response.success) return res.status(200).json(response);
    else return res.status(404).json(response);
})

// Add new category
router.post('/new', async(req, res) => {
    const response = await addNewCategory(req);
    if (response.success) return res.status(200).json(response);
    else return res.status(404).json(response);
})

// Remove category
router.delete('/:id', async (req, res) => {
    let response = await removeCategory(req.params.id)
    if (response.success) return res.status(200).json(response);
    else return res.status(404).json(response);
});

module.exports = router;