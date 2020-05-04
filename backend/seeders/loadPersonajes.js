const axios = require('axios')
const Character = require('../models/Character.js');
const { MONGO_URI } = require('../config/keys')
const mongoose = require("mongoose");
mongoose.connect(MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
    .then(() => console.log('mongoDB connected'))
    .catch(err => console.error(err))

axios.get('https://www.zelda.com/assets/data/glossary.json')
    .then(async res => {
        const characters = res.data.glossary.characters
        for (const character of characters) {
            Character.create({
                name: character.name,
                description: character.desc,
                meta: character.meta,
                image_path: 'https://www.zelda.com/assets/img/gallery-assets/' + character.images.primary
            })
        }

    })