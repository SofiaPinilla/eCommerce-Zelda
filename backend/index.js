const express = require('express');
const mongoose = require('mongoose');
const { MONGO_URI } = require('./config/keys')

const app = express();

//error del cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose.connect(MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false })
    .then(() => console.log('conectado a mongoDB con éxito'))
    .catch(err => console.error(err))

app.use(express.urlencoded({ extended: true }));
// Express body parser
app.use(express.json());
app.use(express.static('./public'));

// Routes

app.use('/users', require('./routes/users.js'));
app.use('/products', require('./routes/products.js'));
app.use('/categories', require('./routes/categories.js'));
app.use('/characters', require('./routes/characters.js'));
app.use('/orders', require('./routes/orders'));


const PORT = process.env.PORT || 3002;

app.listen(PORT, console.log(`Server started on port ${PORT}`));