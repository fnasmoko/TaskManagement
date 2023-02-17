const express = require('express');
const task = require('./routes/task');

const app = express();
const PORT = 3000

app.get('/', (req, res) => {
    res.send('Welcome to Task Management Service')
})

app.use('/task', task)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})