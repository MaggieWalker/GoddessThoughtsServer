// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console

//To test code, run 'node send_sms.js' in terminal

const accountSid = 'AC81ffd1027fbee928ca14eec0eac4f7b2';
const authToken = '26a41e1bb70c5f3edebe85e426e8b975';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'HI THERE',
     from: '+14234559506',
     to: '+16109559650'
   })
  .then(message => console.log(message.sid))
  .done();

