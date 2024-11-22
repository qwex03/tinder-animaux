const express = require('express')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const router = express.Router();

router.post('/register', async (req, res) => {
    const {email, password, name, tel} = req.body;
    try {
        const user = await User.create({email, password, name, tel});
        const token = jwt.sign({id: user._id}, 'secret', {expiresIn: '1h'});
        res.json({token});
    } catch {
        res.status(400).json({message: "Erreur lors de la création de l'utilisateur"})
    }
})

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password))) {
        return res.status(401).json({ message: 'Identifiants incorrects' });
    }
    const token = jwt.sign({ id: user._id }, 'secret', { expiresIn: '1h' });
    res.json({ token });
});

module.exports = router;
    