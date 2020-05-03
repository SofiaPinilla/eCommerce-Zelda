const axios = require('axios')
const Product = require('../models/Product.js');
const Category = require('../models/Category.js');
const { MONGO_URI } = require('../config/keys')
const mongoose = require("mongoose");
mongoose.connect(MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
    .then(() => console.log('mongoDB connected'))
    .catch(err => console.error(err))

axios.get('http://localhost:3001/products')
    .then(async res => {
        try {
            const products = res.data
            for (const product of products) {
                if (product.Category.id === 3) {
                    const productCreated = await Product.create({
                        ...product,
                        CategoryId: '5eade2fc77310d35442d86cc',
                    })
                    console.log(productCreated._id)
                    const cat = await Category.findByIdAndUpdate('5eade2fc77310d35442d86cc', { $push: { ProductId: productCreated._id } });
                    console.log(cat)
                }
            }
        } catch (error) {
            console.error(error)
        }

    })