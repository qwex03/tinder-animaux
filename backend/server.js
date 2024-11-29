const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const socketio = require('socket.io');
const cors = require('cors')

const app = express()
const server = http.createServer(app);
const io = socketio(server);

mongoose.connect('mongodb+srv://Quentin:tinder123@tinder.4xtmz.mongodb.net/?retryWrites=true&w=majority&appName=tinder', {useNewUrlParser: true, useUnifiedTopology: true})

const Animal = require('./models/Animal');

app.use(cors({
    origin: 'http://localhost:3000'
}))

app.use(express.json());

const port = process.env.port || 5000;
server.listen(port, ()=>console.log(`Server running on ${port}`))

app.post('/animals', async (req, res) => {
    const {name, age, race, imageUrl} = req.body;
    const animal = new Animal({name, age, race, imageUrl});
    await animal.save();
    res.send(animal);
})

app.get('/animals', async (req, res)=> {
    const animals = await Animal.find();
    res.send(animals)
})

const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes)

const OrgaRoutes = require('./routes/orga');
app.use('/api/orga', OrgaRoutes)