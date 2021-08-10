const Category = require('../models/Category');

const getCategories = async () => {
    try {
        const categories = await Category.find({});
        return categories;
    } catch (error) {
        return {success: false, message: 'Categories not found..', error: error.message}
    }
}

const addNewCategory = async (req) => {
    try {
        const {body} = req;
        const category = new Category({title: body.title});
        const newCategory = await category.save();
        return {
            success: true, category: newCategory
        }
    } catch (error) {
        return { success: false, message: "Failed to add category", error: error.message};
    }
}

const removeCategory = async id => {
    let category;
    try {
        category = await Category.findById(id);
        if (category == null) {
            return { success: false, message: 'Cannot find category' };
        }

        try {
            await category.remove()
            return {
                success: true,
                message: 'Deleted Category'
            };
        } catch (err) {
            return { success: false ,message: err.message };
        }
    } catch (err) {
        return { success: false, message: err.message };
    }
}

module.exports = {
    getCategories,
    addNewCategory,
    removeCategory
}