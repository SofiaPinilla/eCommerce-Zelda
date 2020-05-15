const User = require('../models/User.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { jwt_secret } = require('../config/keys.js');

const UserController = {
    getInfo(req, res) {
        User.findById(req.user._id)
            .populate('favoritos')
            .populate('orderIds')
            .populate({
                path: 'orderIds',
                populate: {
                    path: 'productIds._id'
                }
            })
            // .populate('stars.user')
            .then(user => res.send(user))
            .catch(console.error);
    },
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
    // getInfo(req, res) {
    //     res.send(req.user);
    // },
    logout(req, res) {
        User.findByIdAndUpdate(req.user._id, { $pull: { tokens: req.headers.authorization } })
            .then(() => res.send({ message: 'Desconectado con éxito' }))
            .catch(error => {
                console.error(error)
                res.status(500).send({
                    message: 'Hubo un problema al intentar conectar al usuario'
                })
            })
    }

}






module.exports = UserController