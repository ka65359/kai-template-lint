const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

// Make public dir available on server
app.use('/public', express.static('public'));

// Sample API endpoint
app.get('/kai-api/greeting', (req, res) => {
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

// Every time / is accessed....
app.get('/', (req, res) => {
   res.send('An alligator approaches!');
   console.log('We got a request!');
});

// Make requests to the API on port 4001
app.listen(4001, () =>
  console.log('kai-api is running on localhost:4001')
);
