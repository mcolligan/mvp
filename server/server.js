const express = require('express');
const bodyParser = require('body-parser');
const conn = require('./trails/conn.js')

const app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/trails', (req, res) => {
  conn.getLatLon(req.query.loc, (data) => {
    let place = JSON.parse(data)
    conn.getTrails(place[req.query.loc], (theTrails) => {
      res.send(theTrails);
    })
  })
})

app.listen('3000', () => {
  console.log('Port 3000:');
})
