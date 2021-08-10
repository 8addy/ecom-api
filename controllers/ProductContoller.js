const Product = require('../models/Product');

const getProducts = async () => {
    try {
        const products = await Product.find({});
        return products;
    } catch (error) {
        return {success: false, message: 'Products not found..'}
    }
}

const getProduct = async (id) => {
    try {
        const product = await Product.findById(id);
        return product;
    } catch (error) {
        return {success: false, message: 'Product not found..'}
    }
}

const addNewProduct = async (data) => {
    try {
        const product = new Product(data);
        const newProduct = await product.save();
        return {
            success: true, product: newProduct
        }
    } catch (error) {
        return { success: false, message: "Failed to add product", error: error.message};
    }
}

const removeProduct = async id => {
    let product;
    try {
        product = await Product.findById(id);
        if (product == null) {
            return { success: false, message: 'Cannot find product' };
        }

        try {
            await product.remove()
            return {
                success: true,
                message: 'Deleted Product'
            };
        } catch (err) {
            return { success: false ,message: err.message };
        }
    } catch (err) {
        return { success: false, message: err.message };
    }
}

const updateProduct = async (id, data) => {
    let product;
    try {
        product = await Product.findById(id);
        if (product == null) {
            return { success: false, message: 'Cannot find product' };
        }
        product.title = data.title || product.title;
        product.description = data.description || product.description;
        product.quantity = data.quantity || product.quantity;
        product.price = data.price || product.price;
        product.category_id = data.category_id || product.category_id;
        try {
            const updatedProduct = await product.save();
            return {
                success: true,
                data: updatedProduct,
                message: "Product updated successfully"
            };
        } catch (err) {
            return { sucess: false ,message: "Failed to update product" };
        }
    } catch (err) {
        return { success: false, message: err.message };
    }
}

module.exports = {
    getProducts,
    addNewProduct,
    getProduct,
    removeProduct,
    updateProduct
}