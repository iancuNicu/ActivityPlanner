
const express = require('express'),
      path = require('path'),
      bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
const port = process.env.PORT || 3000;

let dotenv = require('dotenv').config();

const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;

app.route('/api/config').get((req, res)=>{
  res.send({
    client_id: client_id,
    client_secret: client_secret
  });
});

const server = app.listen(port, function(){
  console.log('Server works! ' + port);
});
