const path = require('path');
const http = require('http');
const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;

const app = express();

let PORT = process.env.PORT || 1337

app.use(express.static(path.join(__dirname, 'public')))

http.createServer(app).listen(PORT || 1337, () => {
  console.log(`Express server listening on port ${PORT}`);
});

app.post('/sms', (req, res) => {
  console.log('I received a message')
  const twiml = new MessagingResponse();
  twiml.message('Thanks for submitting your message to Goddess Thoughts!!!');
  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});

