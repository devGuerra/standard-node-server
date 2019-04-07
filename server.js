const express = require('express');
const app = express();

app.get('/', (req, res) => {
    return res.send({ message: 'Get in root OK!' })
});

app.post('/', (req, res) => {
    return res.send({ message: 'Post in root OK!' })
});

app.listen(3000, () => console.log('Server Online'))