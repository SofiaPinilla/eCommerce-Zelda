const axios = require('axios')
const Category = require('../models/Category.js');
const { MONGO_URI } = require('../config/keys')
const mongoose = require("mongoose");
mongoose.connect(MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
    .then(() => console.log('mongoDB connected'))
    .catch(err => console.error(err))

axios.get('http://localhost:3002/products')
    .then(res => {
        const categories = res.data
        for (const category of categories) {
            if (category.CategoryId == '5ea88b40a2d6ef2cc05b5e2e')
                Category.create({
                    nombre: 'Consolas',
                    ProductId: category._id,
                })
        }
    })