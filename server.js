require('dotenv').config();
const path = require('path');
const http = require('http');
const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const firebase = require('firebase/app')
require('firebase/database');
const bodyParser = require('body-parser')

const app = express();

let PORT = process.env.PORT || 1337

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({extended: false}));

const config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID
}
firebase.initializeApp(config);

http.createServer(app).listen(PORT || 1337, () => {
  console.log(`Express server listening on port ${PORT}`);
});

app.post('/sms', (req, res) => {
  //Add thoughts to firebase database
  firebase.database().ref('thoughts').push(`${req.body.Body}`)

  //Send sms to sender to confirm their thought was added
  const twiml = new MessagingResponse();
  twiml.message(`Thanks for submitting your message to Goddess Thoughts!! You wrote: ${req.body.Body}`);
  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});

