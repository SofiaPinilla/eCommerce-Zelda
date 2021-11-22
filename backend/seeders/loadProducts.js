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
                if (product.Category.id === 1) {
                    const productCreated = await Product.create({
                        ...product,
                        description: 'Console of the special edition of The Legend of Zelda',
                        stock: 10,
                        CategoryId: '5ead8df3174cc9ac477107dc',
                    })
                    const cat = await Category.findByIdAndUpdate('5ead8df3174cc9ac477107dc', { $push: { ProductId: productCreated._id } });
                }
            }
        } catch (error) {
            console.error(error)
        }

    })