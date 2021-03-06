const express = require('express');
const PORT = process.env.PORT || 3000;
const connectDB = require('./config/db');
const cloudinaryInit = require('./config/cloudinary');

const app = express();
app.use(express.json());
app.use('/uploads',express.static('uploads'));
connectDB();
cloudinaryInit();
// Routes
const productsRoute = require('./routes/products');
const categoriessRoute = require('./routes/categories');


app.use('/products', productsRoute)
app.use('/categories', categoriessRoute)

app.listen(PORT, () => {
    console.log('Server is running on Port: '+PORT);
})