const express = require('express');
const bodyParser = require('body-parser');
const CORS = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(CORS());

let clients = [
  {
    id: 0,
    name: 'Bob',
    village: 'MARAKA',
    loanAmount: 200,
    loanInitDate: Date.now(),
    dueDate: new Date('1995-12-17T03:24:00'),
    maizeHarvest: 50,
    maizeToSell: 25
  },
  {
    id: 0,
    name: 'Bob',
    village: 'MARAKA',
    loanAmount: 200,
    loanInitDate: Date.now(),
    dueDate: new Date('1998-1-17T03:24:00'),
    maizeHarvest: 50,
    maizeToSell: 25
  },
  {
    id: 0,
    name: 'Bob',
    village: 'MARAKA',
    loanAmount: 200,
    loanInitDate: Date.now(),
    dueDate: new Date('2000-4-17T03:24:00'),
    maizeHarvest: 50,
    maizeToSell: 25
  },
  {
    id: 0,
    name: 'Bob',
    village: 'MARAKA',
    loanAmount: 200,
    loanInitDate: Date.now(),
    dueDate: new Date('1997-3-17T03:24:00'),
    maizeHarvest: 50,
    maizeToSell: 25
  }
];

let clientId = client.length;

app.get('/api/clients', (req, res) => {
  res.send(clients);
});

app.get('/api/clients/:id', (req, res) => {
  const client = clients.filter(client => `${client.id}` === req.params.id)[0];
  res.status(200).json(client);
});

app.post('/api/clients', (req, res) => {
  if (req.body.name !== undefined) {
    const newClient = req.body;
    newClient['id'] = clientId;
    clients.push(newClient);
  }
  ++clientId;
  res.status(201).json(clients);
});

app.put('/api/movies/:id', (req, res) => {
  if (!req.params.id)
    res.status(400).send('Your request is missing the client id');
    if (
      req.body.id === undefined ||
      !req.body.name ||
      !req.body.village ||
      !req.body.loanAmount ||
      !req.body.loanInitDate ||
      !req.body.dueDate ||
      !req.body.maizeHarvest ||
      !req.body.maizeToSell ||
    ) {
      res
      .status(422)
      .send("Make sure your request body has all the fields it needs");
    }
    clients = clients.map(client => {
      if (`${client.id}` === req.params.id) {
        return req.body;
      }
      return client;
    });
    res.status(200).send(req.body);
});

app.delete('/api/clients/:id', (req, res) => {
  if (!req.params.id)
    res.status(400).send('Your request is missing the client id');
  clients = clients.filter(client => `${client.id}` !== req.params.id);
  res.status(202).send(req.params.id);
});

app.get('/', function(req, res) {
  res.send('App is working 👍');
});

app.listen(5000, () => {
  console.log('Server listening on port 5000');
});
