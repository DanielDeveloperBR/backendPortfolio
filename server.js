const express = require('express')
require('dotenv').config();
const app = express();
const axios = require('axios');
const routerEmail = require('./routes/email')
const cors = require('cors')
const path = require('path')

app.use(cors({
    origin: process.env.URL,
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
  }));
  app.use(express.static(path.join(__dirname, '..index.html'))); 

  app.get('/static/*', async (req, res) => {
  try {
    const fileUrl = `${process.env.URL}/${req.params[0]}`;
    const response = await axios.get(fileUrl, { responseType: 'stream' });
    response.data.pipe(res);
  } catch (error) {
    res.status(500).send('Erro ao obter o arquivo do GitHub.');
  }
});
app.get('/', (req, res) => {
    res.redirect(process.env.URL);
  });
  
app.use(routerEmail)

module.exports = app