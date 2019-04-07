const express = require('express');
const app = express();
const indexRoute = require('./Routes/index')

app.use('/', indexRoute);

app.listen(3000, () => console.log('Server Online'))

module.exports = app