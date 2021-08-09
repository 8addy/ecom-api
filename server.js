const express = require('express');
const PORT = process.env.PORT || 3000;

const app = express();
// app.use(express.json());

// Routes
const productsRoute = require('./routes/products');


app.use('/products', productsRoute)

app.listen(PORT, () => {
    console.log('Server is running on Port: '+PORT);
})