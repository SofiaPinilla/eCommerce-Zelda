const User = require('../models/User.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { jwt_secret } = require('../config/keys.js');



const UserController = {
    async register(req, res) {
        try {
            const email = req.body.email;
            const user = await User.findOne({ email: email })
            if (user) {
                return res.status(400).send({ message: 'Este correo ya existe' });
            }
            const hash = await bcrypt.hash(req.body.password, 10)
            const newUser = await User.create({...req.body, password: hash, role: 'user' });
            res.status(201).send({
                newUser
            });
        } catch (error) {
            console.error(error);
            res.status(500).send({ error, message: 'Hubo un problema al tratar de registar' })
        }
    },

    async login(req, res) {
        try {
            const user = await User.findOne({
                nombre: req.body.nombre,
            })

            if (!user) {
                return res.status(400).send({ message: 'Contraseña o nombre incorrectos' });
            }
            const isMatch = await bcrypt.compare(req.body.password, user.password)

            if (!isMatch) {
                return res.status(400).send({ message: 'Contraseña o nombre incorrectos' });
            }

            token = jwt.sign({ id: user.id }, jwt_secret);
            if (user.tokens.length > 4) user.tokens.shift();
            user.tokens.push(token);
            await user.save();

            res.send({ message: 'Bienvenid@ ' + user.nombre, token });

        } catch (error) {
            console.error(error);
        }
    },


}






module.exports = UserController