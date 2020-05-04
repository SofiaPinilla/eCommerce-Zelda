const Character = require('../models/Character.js');
const CharacterController = {
    getAll(req, res) {
        Character.find({})
            .then(characters => res.send(characters))
            .catch(err => {
                console.log(err)
                res.status(500).send({ message: 'There was a problem trying to load the characters' })
            })
    }
}

module.exports = CharacterController;