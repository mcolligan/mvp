const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// app.get('/', (req, res) => {
//   console.log('here')
// })

app.listen('3000', () => {
  console.log('Port 3000:');
})
