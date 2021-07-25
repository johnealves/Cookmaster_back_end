const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const recipesRoutes = require('./recipesRoutes');
const userRoutes = require('./userRoutes');
const error = require('./error');
const { login, getCategories } = require('../controllers');

const app = express();

app.use(bodyParser.json());
app.use('/images', express.static(path.join(__dirname, '..', 'uploads')));

// app.use(
//   cors({
//     origin: `http://localhost:${PORT}`,
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Authorization'],
//   }),
// );

app.get('/', (req, res) =>{
  res.send('Vamo que vamo!!!')
})

app.use('/recipes', recipesRoutes);
app.use('/users', userRoutes);
app.post('/login', login);
app.get('/categories', getCategories)

app.use(error);

module.exports = app;