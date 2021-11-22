const axios = require('axios')
const Item = require('../models/Item.js');
const { MONGO_URI } = require('../config/keys')
const mongoose = require("mongoose");
mongoose.connect(MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
    .then(() => console.log('mongoDB connected'))
    .catch(err => console.error(err))
axios.get('https://www.zelda.com/assets/data/glossary.json')
    .then(async res => {
        const items = res.data.glossary.items
        for (const item of items) {
            Item.create({
                name: item.name,
                description: item.desc,
                meta: item.meta,
                image_path: 'https://www.zelda.com/assets/img/gallery-assets/' + item.images.primary
            })
        }
    })