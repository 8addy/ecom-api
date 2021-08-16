const Order = require('../models/Order');

const getOrders = async () => {
    try {
        const orders = await Order.find({});
        return orders;
    } catch (error) {
        return {success: false, message: 'Order not found..', error: error.message}
    }
}

const addNewOrder = async (req) => {
    try {
        const {body} = req;
        // const order = new Order({title: body.title});
        // const newOrder = await order.save();
        return {
            success: true, order: newOrder
        }
    } catch (error) {
        return { success: false, message: "Failed to add order", error: error.message};
    }
}

const removeOrder = async id => {
    let order;
    try {
        order = await Order.findById(id);
        if (order == null) {
            return { success: false, message: 'Cannot find order' };
        }

        try {
            await order.remove()
            return {
                success: true,
                message: 'Deleted Order'
            };
        } catch (err) {
            return { success: false ,message: err.message };
        }
    } catch (err) {
        return { success: false, message: err.message };
    }
}

module.exports = {
    getOrders,
    addNewOrder,
    removeOrder
}